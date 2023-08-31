const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const userController = {
  createUser: async (req, res) => {
    const existingUser = await User.find({ email: req.body.email });

    if (existingUser.length) {
      res.status(200);
      const user = existingUser[0];
      res.json({
        userId: user.userId,
        onBoardingFinished: user.onBoardingFinished,
      });
      res.send();
    } else {
      const user = { userId: uuidv4(), ...req.body }; //should check whether this gives already existing id but eh...
      model
        .create(user)
        .then((newUser) => {
          res.status(201);
          res.json({
            userId: newUser.userId,
            onBoardingFinished: newUser.onBoardingFinished,
          });
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
    const userId = req.params.id;
    let key = "userId";
    if (userId.includes("@")) key = "email"; //incase the query is done using email
    const foundUser = await User.findOne({ [key]: userId });
    res.json(foundUser);
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
