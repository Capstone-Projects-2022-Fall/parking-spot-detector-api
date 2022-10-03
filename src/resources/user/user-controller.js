const { User } = require('../../model/');
const connect_to_db = require('../../database');

const USERS = "users";

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
    app.get(`/${USERS}/`, (req, res, next) => {
      connect_to_db().then(() => {
        User.find().then((users) => {
          res.send(users);
        }).catch(err => {
          next(err);
        });
      });
    });

    app.get(`/${USERS}/:id`, (req, res, next) => {
      connect_to_db().then(() => {
        User.find({_id: req.params["id"]}).then((users) => {
          res.send(users);
        }).catch(err => {
          next(err);
        });
      });
    });

    app.post(`/${USERS}`, (req, res, next) => {
      connect_to_db().then(() => {
        const new_user = new User(req.body).save();
        new_user.then(result => {
          res.send(result);
        }).catch(err => {
          next(err);
        });
      });
    });

    app.delete(`/${USERS}/:id`, (req, res) => {
      connect_to_db().then(() => {
        User.deleteOne({_id: req.params["id"]}).then((result) => {
          res.send(result);
        }).catch(err => {
          next(err);
        });
      });
    });
  }
}

module.exports = UserController;
