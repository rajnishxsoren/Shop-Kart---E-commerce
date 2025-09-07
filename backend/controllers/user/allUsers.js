import userModel from "../../models/user.model.js";

const allUsersController = async (req,res) => {
    try {
        
        const allUsers = await userModel.find();
        console.log(allUsers);
        
        res.status(200).json({
           data : allUsers,
            success: true
        });
    } catch (err) {
        res.status(500).json({ 
            message: err.message,
            success: false
        });
        
    }
}

export default allUsersController;