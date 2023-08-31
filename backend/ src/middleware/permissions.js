const User = require('../api/models/userModel');
const Role = require('../api/models/roleModel');

function checkUserCapabilities(requiredCapability) {
    return async (req, res, next) => {
        try {
            // Assuming user's ID is stored in the JWT as `user_id`
            const userId = req.user.user_id;

            // Fetch the user and their role from the database
            const user = await User.findById(userId).populate('role');

            if (!user || !user.role) {
                return res.status(403).send({ message: "User does not have a role" });
            }

            // Fetch the capabilities associated with the user's role
            const role = await Role.findById(user.role._id).populate('capabilities');

            const userCapabilities = role.capabilities.map(cap => cap.name);

            // Check if the user has the required capability
            if (userCapabilities.includes(requiredCapability)) {
                return next(); // Allow the request to proceed
            } else {
                return res.status(403).send({ message: "Insufficient capabilities" });
            }
        } catch (error) {
            return res.status(500).send({ message: "Server error", error: error.message });
        }
    }
}

module.exports = checkUserCapabilities;