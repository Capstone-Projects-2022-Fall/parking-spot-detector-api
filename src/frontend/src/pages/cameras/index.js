import React, { useEffect, useState }from 'react';
import axios from 'axios';

const UserCameraPage = () => {
    const [cameraData, setCameraData] = useState([]);

    useEffect(() => {
        const fetchCameras = async () => {
            const data = await axios.get('http://127.0.0.1:8080/cameras');
            setCameraData(data.data);
        }; 
        fetchCameras();
    }, []);

    return (
        <>
            <b>Camera IDS</b>
            <div>
                {
                    cameraData.map((item, index) => {
                        return (
                            <small key={index}>
                                {item['_id']}
                            </small>
                        );
                    })
                }
            </div>
        </>
    );
}

export default UserCameraPage;
