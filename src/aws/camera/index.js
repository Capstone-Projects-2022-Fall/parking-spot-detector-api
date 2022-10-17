const dyClient = require('../dynamodb');
const table = "psdbackenddydb_camera";

// create/update camera instance
const createOrUpdateCamera = async (data={}) => {
    const params = {
        TableName: table,
        Item: data,
    };
    try {
        await dyClient.put(params).promise();
        return { success: true }
    } catch (err) {
        return { success: false }
    };
};

// read all cameras
const readAllCameras = async () => {
    const params = {
        TableName: table,
    };
    try {
        const { Items = [] } = await dyClient.scan(params).promise();
        return {
            success: true,
            data: Items
        }
    } catch (err) {
        return { 
            success: false, 
            data: null
        }
    }
};

// read a specific camera
const readOneCamera = async (value, key = 'id') => {
    const params = {
        TableName: table,
        Key: {
            [key]: value
        }
    };
    try {
        const { Item = [] } = await dyClient.get(params).promise();
        return {
            success: true,
            data: Item
        }
    } catch (err) {
        return {
            success: false,
            data: null
        }
    };
};

// delete camera instance
const deleteCamera = async () => {
    const params = {
        TableName: table,
        Key: {
            [key]: value,
        }
    };
    try {
        const deletePromise = await dyClient.delete(params).promise();
        return { success: true }
    } catch (err) {
        return { success: false }
    };
};

module.exports = {
    createOrUpdateCamera,
    readAllCameras,
    readOneCamera,
    deleteCamera
}