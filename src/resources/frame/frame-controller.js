const { Frame } = require('../../model/');
const connect_to_db = require('../../database');

const FrameFunctions = require('../../aws/frame');

const FRAMES = "frames";

/*
  FrameController

  Post(:camera_id, :bytes, :processed, :datetime)
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
        const frames = await Frame.find();
        res.send(frames);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${FRAMES}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const frame = Frame.find({_id: req.params["_id"]});
        res.send(frame);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${FRAMES}`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const new_frame = await new Frame(req.body).save();
        res.send(new_frame);
      } catch(err) {
        next(err);
      }
    });

    app.delete(`/${FRAMES}/:id`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const deleted_status = await Frame.deleteOne({_id: req.params["_id"]});
        res.send(deleted_status);
      } catch(err) {
        next(err);
      }
    });
  }
}

module.exports = FrameController;
