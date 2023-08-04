const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const userController = {
  createUser: async (req, res) => {
    const existingUser = await User.find({ email: req.body.email });

    if (existingUser.length) {
      res.status(200);
      res.json({ userId: existingUser[0].userId });
    } else {
      const user = { userId: uuidv4(), ...req.body };
      User.create(user)
        .then((newUser) => {
          res.status(201);
          res.json({ userId: newUser.userId });
        })
        .catch((errors) => {
          res.status(500).json({
            errors,
          });
        });
    }
  },

  fetchUser: async (req, res) => {
    const userId = req.params.userId;

    res.body = await User.find({ userId: userId });
  },
};

module.exports = userController;
