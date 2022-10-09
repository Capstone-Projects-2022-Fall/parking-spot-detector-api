const { Group } = require('../../model/');
const connect_to_db = require('../../database');

const GROUP = "group";

/**
 *  GroupController
 *  
 *  Post:
 *  Get:
 *  Put:
 *  Delete: 
 * 
 */

class GroupController {
    constructor(app) {
        app.get(`/${GROUP}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const groups = await Group.find();
                res.send(groups);
            } catch (err) {
                next(err);
            }
        });

        app.get(`/${GROUP}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const group = Group.find({_id: req.params['id']});
                res.send(group);
            } catch (err) {
                next(err);
            }
        });

        app.post(`/${GROUP}/`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const group = await new Group(req.body).save();
                res.send(group);
            } catch (err) {
                next(err);
            }
        });

        app.delete(`/${GROUP}/:id`, async (req, res, next) => {
            try {
                const database_connection = await connect_to_db();
                const deleteGroup = await Group.deleteOne({_id: req.params['id']});
                res.send(deleteGroup);
            } catch (err) {
                next(err);
            }
        });
    }
}

module.exports = GroupController;
