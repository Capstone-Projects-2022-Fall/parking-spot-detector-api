const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        //index: true,
    },
    last_name: {
        type: String,
        required: true,
        //index: true,
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
        unique: true,
        //index: true,
    },
    password_hash: {
        type: String,
        required: true
    },
    handicap: {
        type: Boolean,
        default: false,
        //index: true
    },
    address: {
        type: String,
        //index: true
    },
    administered_group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        default: null,
        //index: true,
    },
    administered_camera: {
        type: Schema.Types.ObjectId,
        ref: 'Camera',
        default: null,
        //index: true,
    }
}, {
    strict: true
});

const Admin = new mongoose.model('Admin', AdminSchema);

module.exports = Admin;