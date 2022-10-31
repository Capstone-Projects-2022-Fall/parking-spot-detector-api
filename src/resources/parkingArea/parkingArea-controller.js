const { ParkingArea } = require('../../model');
const connect_to_db = require('../../database');

const PA = "parkingarea";

/**
 * 
 * 
 */

class ParkingAreaController {
    constructor(app) {
        app.get(`/${PA}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const areas = await ParkingArea.find();
                res.send(areas);
            } catch (err) {
                next(err);
            }
        });

        app.get(`/${PA}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const area = await ParkingArea.find({_id: req.params["id"]});
                res.send(area);
            } catch (err) {
                next(err);
            }
        });

        app.post(`/${PA}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const area = await new ParkingArea(req.body).save();
                res.send(area);
            } catch (err) {
                next(err);
            }
        });

        app.delete(`/${PA}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const deleteArea = await ParkingArea.deleteOne({_id: req.params['id']});
                res.send(deleteArea);
            } catch (err) {
                next(err);
            }
        });
    }
};

module.exports = ParkingAreaController;
