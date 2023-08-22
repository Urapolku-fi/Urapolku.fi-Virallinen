const User = require("../models/userModel");
const Employer = require("../models/employerModel");
const { v4: uuidv4 } = require("uuid");

const userController = {
  createUser: async (req, res) => {
    const model = req.query.type === "employer" ? Employer : User;
    const existingUser = await model.find({ email: req.body.email });

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
    try {
      const userId = req.params.id;
      if (userId.includes("@")) {
        //query users with email
        const foundUsers = await User.findOne({ email: userId });
        const foundEmployers = await Employer.findOne({ email: userId });
        Promise.all([foundUsers, foundEmployers]).then((users) => {
          res.json(users.filter((val) => val !== null)[0]);
          res.send();
        });
      } else {
        //query users with UUID
        const foundUsers = await User.findOne({ userId: userId });
        const foundEmployers = await Employer.findOne({ userId: userId });
        Promise.all([foundUsers, foundEmployers]).then((users) => {
          res.json(users.filter((val) => val !== null)[0]);
          res.send();
        });
      }
    } catch (err) {
      console.log(err);
    }
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
