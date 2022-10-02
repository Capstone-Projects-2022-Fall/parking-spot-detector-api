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
    app.get(`/${USERS}/:id`, (req, res) => {
      res.send(req.params);
    });

    app.post(`/${USERS}`, (req, res) => {

    });

    app.delete(`/${USERS}/:id`, (req, res) => {

    });

    // app.update(`/${USERS}/:id`, (req, res) => {
    //
    // });
  }
}

module.exports = UserController;
