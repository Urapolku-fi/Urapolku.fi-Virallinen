const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const userController = {
  createUser: async (req, res) => {
    const existingUser = await User.find({ email: req.body.email });

    if (existingUser.length) {
      res.status(200);
      res.json({ userId: existingUser[0].userId });
      res.send();
    } else {
      const user = { userId: uuidv4(), ...req.body };
      User.create(user)
        .then((newUser) => {
          res.status(201);
          res.json({ userId: newUser.userId });
          res.send();
        })
        .catch((errors) => {
          res.status(500).json({
            errors,
          });
          res.send();
        });
    }
  },

  fetchUser: async (req, res) => {
    const userId = req.params.userId;

    res.body = await User.find({ userId: userId });
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const data = req.body;

    await User.updateOne({ userId: userId }, data);
    res.status(200);
    res.send();
  },
};

module.exports = userController;
