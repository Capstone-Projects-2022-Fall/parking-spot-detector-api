const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    private: {
        type: Boolean,
        default: true,
    },
    owner: {
        //type: String,
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
    users: [
        {
            //type: String,
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ]
}, {
    strict: true
});

const Group = new mongoose.model('Group', GroupSchema);

module.exports = Group;