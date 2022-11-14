const connect_to_db = require('../../database');
const passport = require('passport');
const { User } = require('../../model');

/*
  CameraController

  Post(:first_name, :last_name, :email, :phone_number)
    -> Register Camera
  Get(:id) -> Get Camera
  Delete(:id) -> Delete Camera
  Update({token => new_value}) -> Update Camera
*/

class AuthController {
  constructor(app) {
    app.post('/login/', passport.authenticate('local'), async (req, res, next) => {
      try {
        res.send(req.user);
      } catch(err) {
        next(err);
      }
    });

    app.post('/register/', async (req, res) => {
      const db = await connect_to_db();
      const { email, username, password } = req.body;
      const new_user = await new User({
        email: email, username: username
      });
      User.register(new_user, password, function (err, user) {
        if (err) {
            res.json({ success: false, message: "Your account could not be saved. Error: " + err });
        }
        else {
            res.json({ success: true });
        }
      });
    });
  }
}

module.exports = AuthController;
