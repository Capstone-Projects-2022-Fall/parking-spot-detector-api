const { Camera } = require('../../model/');
const connect_to_db = require('../../database');

const CAMERAS = "cameras";

/*
  CameraController

  Post(:first_name, :last_name, :email, :phone_number)
    -> Register Camera
  Get(:id) -> Get Camera
  Delete(:id) -> Delete Camera
  Update({token => new_value}) -> Update Camera
*/

class CameraController {
  constructor(app) {
    app.get(`/${CAMERAS}/`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const cameras = await Camera.find();
        res.send(cameras);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${CAMERAS}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const camera = Camera.find({_id: req.params['_id']});
        res.send(camera);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${CAMERAS}`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const new_camera = await new Camera(req.body).save();
        res.send(new_camera);
      } catch(err) {
        next(err);
      }
    });

    app.delete(`/${CAMERAS}/:id`, async (req, res) => {
      try {
        const database_connect = await connect_to_db();
        const deleted_status = await Camera.deleteOne({_id: req.params['_id']});
        res.send(deleted_status);
      } catch(err) {
        next(err);
      }
    });
  }
}

module.exports = CameraController;
