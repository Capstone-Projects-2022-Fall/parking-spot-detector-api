const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ParkingAreaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    mapsDisplay: {
        type: Boolean,
        default: false,
        required: true,
    },
    address: {
        type: String,
        unique: true,
        required: true
    },
    spots: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    strict: true
});

const ParkingArea = new model('ParkingArea', ParkingAreaSchema);

module.exports = ParkingArea;
