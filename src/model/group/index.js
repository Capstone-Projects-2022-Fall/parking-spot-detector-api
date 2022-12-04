const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    privacy: {
        type: Boolean,
        required: true,
        default: true
    },
    home_addr: {
        type: String,
        unique: true
    },
    status_update: {
        type: String,
        default: true
    },
    admins: {
        type: [String],
    },
    users: {
        type: [String],
    }
}, {
    strict: true
});

const Group = new model('Group', GroupSchema);

module.exports = Group;