const { Frame } = require('../../model/');
const connect_to_db = require('../../database');

const FRAMES = "frames";

/*
  FrameController

  Post(:first_name, :last_name, :email, :phone_number)
    -> Register Frame
  Get(:id) -> Get Frame
  Delete(:id) -> Delete Frame
  Update({token => new_value}) -> Update Frame
*/

class FrameController {
  constructor(app) {
    app.get(`/${FRAMES}/`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const cameras = await Frame.find();
        res.send(cameras);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${FRAMES}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const camera = Frame.find({_id: req.params["id"]});
        res.send(camera);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${FRAMES}`, async (req, res, next) => {
      try {
        const camera_id = req.query.camera_id; // get camera_id from session

        console.log(camera_id);

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        console.log(req.files.frame);

        const database_connect = await connect_to_db();
        const new_frame = await new Frame({camera_id}).save();
        res.send(new_frame);
      } catch(err) {
        next(err);
      }
    });

    app.delete(`/${FRAMES}/:id`, async (req, res) => {
      try {
        const database_connect = await connect_to_db();
        const deleted_status = await Frame.deleteOne({_id: req.params["id"]});
        res.send(deleted_status);
      } catch(err) {
        next(err);
      }
    });
  }
}

module.exports = FrameController;
