const userLogout = async (req, res) => {
    try {
        // Clear the token cookie
       res.clearCookie("token",{
              path : '/',
            httpOnly: true,
            secure: true,
            sameSite: 'none',
       });

        // Send a success response
        res.status(200).json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        // Handle any unexpected errors
        res.status(500).json({
            message: err.message || "An error occurred while logging out",
            error: true,
            success: false
        });
    }
};

export default userLogout;
