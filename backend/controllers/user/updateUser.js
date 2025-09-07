import userModel from "../../models/user.model.js"; // Corrected the file extension

const updateUserController = async (req, res) => {
    try {
        const sessionUser = req.userId;
        const { userId, email, username, role } = req.body;

        const payload = {
            ...(email && { email }),
            ...(username && { username }),
            ...(role && { role }),
        };

        const user = await userModel.findById(sessionUser);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        Object.assign(user, payload);
        await user.save();

        res.status(200).json({ 
            message: "User updated successfully",
            success: true,
            user 
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export default updateUserController;