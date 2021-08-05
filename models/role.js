const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
    role: {
        type: String,
        required: [true, 'Role obligatorio']
    }
})

module.exports = model('Role', RoleSchema);