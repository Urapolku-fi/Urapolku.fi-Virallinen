const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CapabilitySchema = new Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Capability', CapabilitySchema);