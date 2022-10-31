const { User, Admin } = require('../../model/');
const connect_to_db = require('../../database');

const USERS = "user";

/*
  UserController

  Post(:first_name, :last_name, :email, :phone_number)
    -> Create User
  Get(:id) -> Get User
  Delete(:id) -> Delete User
  Update({token => new_value}) -> Update User
*/

class UserController {
  constructor(app) {
    app.get(`/${USERS}/`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const users = await User.find();
        res.send(users);
      } catch(err) {
        console.log(err);
        next(err);
      }
    });

    app.get(`/${USERS}/:id`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const users = User.find({_id: req.params["id"]});
        res.send(users);
      } catch(err) {
        next(err);
      }
    });

    app.post(`/${USERS}`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const new_user = await new User(req.body).save();
        res.send(new_user);
      } catch(err) {
        next(err);
      }
    });

    app.delete(`/${USERS}/:id`, async (req, res, next) => {
      try {
        const database_connect = await connect_to_db();
        const deleted_status = await User.deleteOne({_id: req.params["id"]});
        res.send(deleted_status);
        res.send(new_user);
      } catch(err) {
        next(err);
      }
    });

    // add admin roles and make admin role anytime
    app.put(`/${USERS}/:id/touser`, async (req, res, next) => {
      try {
        const database_connection = await connect_to_db();
        const user = await User.find({_id: req.params['id']});
        const created_admin = await new Admin(req.body).save();
        res.send(created_admin);
      } catch (err) {
        next(err);
      }
    })
  }
}

module.exports = UserController;
