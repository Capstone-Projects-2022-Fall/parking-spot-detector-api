const { Frame } = require('../../model/');
const connect_to_db = require('../../database');
const { upload_frame, upload_annotated_frame, get_annotated_frame } = require('../../services').AWS.S3;

const FRAMES = "frames";
const ANNOTATED = "annotated";

/*
  FrameController

  Post(:camera_id, :bytes, :processed, :datetime) -> Register Frame
  Get(:id) -> Get Frame
  Delete(:id) -> Delete Frame
  Update({token => new_value}) -> Update Frame
*/

class FrameController {
  constructor(app) {
    app.get(`/${FRAMES}/`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const frames = await Frame.find();
        res.send(frames);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${FRAMES}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const frame = await Frame.find({_id: req.params["_id"]});
        res.send(frame);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${ANNOTATED}/:id`, async (req, res, next) => {
      try {
        console.log("recieved frame")

        const camera_id = req.params["id"]; // get camera_id from session

        console.log(camera_id);

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        console.log(typeof req.files.frame);
        console.log(`Saved ${req.files.frame.name} to S3`);

        const result = await upload_annotated_frame(camera_id, req.files.frame.data);
        res.send(result);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${ANNOTATED}/:id`, async (req, res, next) => {
      try {
        const camera_id = req.params["id"]; // get camera_id from session

        console.log(camera_id);

        const response = await get_annotated_frame(camera_id);
        res.send(response);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${FRAMES}`, async (req, res, next) => {
      try {
        console.log("recieved frame")

        const camera_id = req.body.camera_id; // get camera_id from session

        console.log(camera_id);

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        console.log(typeof req.files.frame);
        console.log(`Saved ${req.files.frame.name} to S3`);

        const database_connect = await connect_to_db();
        const new_frame = await new Frame(req.body).save();

        upload_frame(camera_id, new_frame._id, req.files.frame.data);
        res.send(new_frame);
      } catch(err) {
        next(err);
      }
    });

    app.delete(`/${FRAMES}/:id`, async (req, res, next) => {
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
