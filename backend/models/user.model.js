import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username :{
          type : String,
          required : true,

    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password :{
        type : String,
        minLenght : [6],
    },
    profilePic : String,
    role : String,
},{
    timestamps : true
})


const userModel =  mongoose.model("user",userSchema)

export default userModel;