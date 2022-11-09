import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCameraPage = () => {
    const [cameraData, setCameraData] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        const fetchCameras = async () => {
            const data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/cameras/');
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
                        const newID = item['_id'];
                        return (
                            <div key={index}>
                                <span style={{ paddingRight: '1em' }}>
                                    {newID}
                                </span>
                                <input 
                                    type='button'
                                    value='GO'
                                    onMouseOver={(e) => {
                                        setId(newID);
                                    }}
                                    onClick={() => {
                                        setTimeout(() => {
                                            window.open(`/profile/cameras/${id}/frames`, '_self');
                                        }, [500]);
                                    }}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default UserCameraPage;
