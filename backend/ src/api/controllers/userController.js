const User = require("../models/userModel");

const userController = {
  createUser: async (req, res) => {
    const user = req.body;

    User.create(user)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((errors) => {
        res.status(500).json({
          errors,
        });
      });
  },
};

module.exports = userController;
