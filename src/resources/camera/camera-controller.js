const { Camera, Frame } = require('../../model/');
const connect_to_db = require('../../database');
const { upload_mask, get_latest_frame } = require('../../services').AWS.S3;

const CAMERAS = "cameras";
const MASK = "mask";
const LATEST = "latest";

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
      } catch (err) {
        next(err);
      }
    });

    app.get(`/${CAMERAS}/:id/${LATEST}`, async (req, res, next) => {
      try {
        const camera_id = req.params["id"]; // get camera_id from session

        const response = await get_latest_frame(camera_id);

        res.send(response);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${CAMERAS}/:id/${MASK}`, async (req, res, next) => {
      try {
        const camera_id = req.params["id"]; // get camera_id from session

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        const database_connect = await connect_to_db();
        const response = await upload_mask(camera_id, req.files.mask.data);

        res.send(response);
      } catch(err) {
        next(err);
      }
    });


    app.get(`/${CAMERAS}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const camera = await Camera.find({_id: req.params["id"]});
        res.send(camera);
      } catch (err) {
        next(err);
      }
    });

    app.patch(`/${CAMERAS}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const camera = Camera.find({});

        const query = {_id: req.params["id"]};
        const new_fields = req.body;


        const response = await Camera.findOneAndUpdate(query, new_fields, {rawResult: true});
        res.send(response);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${CAMERAS}`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const new_camera = await new Camera(req.body).save();
        res.send(new_camera);
      } catch (err) {
        next(err);
      }
    });

    app.delete(`/${CAMERAS}/:id`, async (req, res) => {
      try {
        const database_connect = await connect_to_db();
        const deleted_status = await Camera.deleteOne({ _id: req.params["id"] });
        res.send(deleted_status);
      } catch (err) {
        next(err);
      }
    });

    // frames from a particular camera
    app.get(`/${CAMERAS}/:id/frames`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const camera = await Camera.find({_id: req.params['_id']});
        const frames = await Frame.find({camera_id: camera['_id']});
        res.send(frames);
      } catch (err) {
        next(err);
      }
    });
  }
}

module.exports = CameraController;
