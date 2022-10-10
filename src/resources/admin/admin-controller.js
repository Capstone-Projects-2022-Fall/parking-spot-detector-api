const { Admin } = require('../../model/');
const connect_to_db = require('../../database');

const ADMIN = "admins";

/**
 *  AdminController
 *  
 *  Post: (:first_name, :last_name, :email, :phone_number)
 *      -> Create Admin
 *  Get: (:id) -> Get Admin
 *  Put: ({token => new_value}) -> Update the Admin
 *  Delete: (:id) -> Delete Admin 
 * 
 */

class AdminController {
    constructor(app) {
        app.get(`/${ADMIN}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const admins = await Admin.find();
                res.send(admins);
            } catch (err) {
                next(err);
            }
        });

        app.get(`/${ADMIN}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const admin = await Admin.find({_id: req.params['_id']});
                res.send(admin);
            } catch (err) {
                next(err);
            }
        });

        app.post(`/${ADMIN}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const admin = await new Admin(req.body).save();
                res.send(admin);
            } catch (err) {
                next(err);
            }
        });

        app.delete(`/${ADMIN}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const deleted_status = await Admin.deleteOne({_id: req.params['_id']});
                res.send(deleted_status);
            } catch (err) {
                next(err);
            }
        });
    }
}

module.exports = AdminController;
