const { dyClient } = require('../dynamodb');
const table = "psdbackenddydb_frame";

const createOrUpdateFrame = async (data={}) => {
    const params = {
        TableName: table,
        Item: data
    };
    try {
        const postPromise = await dyClient.put(params).promise();
        return { success: true };
    } catch (err) {
        return { success: false };
    };
};

const readAllFrames = async () => {
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
    };
}

const readFramesByCamera = async (value, key = 'camera_id') => {
    const params = {
        TableName: table,
        Key: {
            [key]: value
        }
    };
    try {
        const { Items = [] } = await dyClient.get(params).promise();
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
}

const readOneFrame = async (value, key = 'id') => {
    const params = {
        TableName: table,
        Key: {
            [key]: value,
        }
    };
    try {
        const { Item = {} } = await dyClient.get(params).promise();
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
}

const deleteFrame = async (value, key = 'id') => {
    const params = {
        TableName: table,
        Key: {
            [key]: value,
        }
    };
    try {
        const deletePromise = await dyClient.delete(params).promise();
        return { success: true };
    } catch (err) {
        return { success: false };
    };
}

const FrameFunctions = {
    createOrUpdateFrame,
    readAllFrames,
    readFramesByCamera,
    readOneFrame,
    deleteFrame,
}

module.exports = FrameFunctions;
