const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: { type: String, required: true, unique: true },
    capabilities: [{ type: Schema.Types.ObjectId, ref: 'Capability' }]
});

module.exports = mongoose.model('Role', RoleSchema);
