import bcrypt from 'bcrypt';
import userModel from '../../models/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const  userLogInInController = async(req,res)=>{
    try{
        const { email , password} = req.body;

        if(!email){
            throw new Error("Please provide email");
        }
        if(!password){
             throw new Error("Please provide password");
        }

        const user = await userModel.findOne({email});

       if(!user){
            throw new Error("User not found");
       }

       const checkPassword = await bcrypt.compare(password,user.password);

       console.log("checkPassoword",checkPassword);

       if(checkPassword){
        const tokenData = {
            _id : user._id,
            email : user.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

        const tokenOption = {
            httpOnly : true,
            secure : true,
            sameSite : "none",
        }

        res.cookie("token",token,tokenOption).status(200).json({
            message : "Login successfully",
            data : token,
            success : true,
            error : false
        })

       }else{
         throw new Error("Please check Password")
       }
       
    }catch(err){
        res.status(400).json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }

}

export default userLogInInController;