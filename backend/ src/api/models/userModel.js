const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userId: { type: String, required: true, max: 36, unique: true },
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    bannerPicture: { type: String },
    description: { type: String },
    industry: { type: [{ type: String }] },
    skills: { type: [{ type: String }] },
    title: { type: String },
    employmentType: { type: String },
    location: { type: String },
    locationType: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    onBoardingFinished: { type: Boolean },
  },
  { collection: "users" }
);

// Export model
module.exports = mongoose.model("User", UserSchema);
