const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  email: { type: String, required: true, unique: true },
  picture: { type: String },
});

// Export model
module.exports = mongoose.model("User", UserSchema);
