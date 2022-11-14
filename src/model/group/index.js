const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const GroupSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    private: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    strict: true
});

const Group = new model('Group', GroupSchema);

module.exports = Group;