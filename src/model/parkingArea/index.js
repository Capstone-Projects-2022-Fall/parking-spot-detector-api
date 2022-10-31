const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ParkingAreaSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    public: {
        type: String,
        required: true
    },
    hideFromMaps: {
        type: Boolean,
        default: false,
        required: true,
    },
    spots: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    strict: true
});

const ParkingArea = new model('ParkingArea', ParkingAreaSchema);

module.exports = ParkingArea;
