const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerSchema = new Schema(
  {
    userId: { type: String, required: true, max: 36, unique: true },
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    bannerPicture: { type: String },
    description: { type: String },
    industry: { type: [{ type: String }] },
    location: { type: String },
    numOfEmployees: { type: String },
    website: { type: String },
    onBoardingFinished: { type: Boolean },
  },
  { collection: "employers" }
);

// Export model
module.exports = mongoose.model("Employer", EmployerSchema);
