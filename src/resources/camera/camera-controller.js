const { Camera, Frame } = require('../../model/');
const connect_to_db = require('../../database');
const { upload_mask, upload_annotated_frame, get_latest_frame, get_annotated_frame } = require('../../services').AWS.S3;

const CAMERAS = "cameras";
const MASK = "mask";
const LATEST = "latest";
const NOTIFY = "notify";
const ANNOTATED = "annotated";


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

    app.post(`/${CAMERAS}/:id/${ANNOTATED}`, async (req, res, next) => {
      try {
        const camera_id = req.params["id"]; // get camera_id from session

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        const database_connect = await connect_to_db();
        const response = await upload_annotated_frame(camera_id, req.files.frame.data);

        res.send(response);
      } catch(err) {
        next(err);
      }
    });

    app.get(`/${CAMERAS}/:id/${ANNOTATED}`, async (req, res, next) => {
      try {
        const camera_id = req.params["id"]; // get camera_id from session

        if(!req.files) {
          // error no file was uploaded.
          console.log("no files");
        }

        const database_connect = await connect_to_db();
        const response = await upload_annotated_frame(camera_id, req.files.frame.data);

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
        const query = {_id: req.params["id"]};

        console.log(req.body["spot_sizes"]);

        const new_segments = req.body.segments;

        const new_spot_sizes = req.body.spot_sizes.map(x => {
          return {
            midpoint: x[0],
            size: x[1]
          };
        });

        console.log(new_spot_sizes);

        const response = await Camera.updateOne(query, [
          {$set: {spot_sizes: new_spot_sizes}},
          {$set: {segments: new_segments}}
        ], {rawResult: true});
        res.send(response);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${CAMERAS}/:id/${NOTIFY}`, async (req, res, next) => {
      try {
        res.send("");
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
