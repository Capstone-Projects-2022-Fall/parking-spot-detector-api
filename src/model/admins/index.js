const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    _id: Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    handicap: {
        type: Boolean,
        default: false
    },
    address: String,
    administered_group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        default: null
    },
    administered_camera: {
        type: Schema.Types.ObjectId,
        ref: 'Camera',
        default: null
    }
}, {
    strict: true
});

const Admin = new mongoose.model('Admin', AdminSchema);

module.exports = Admin;