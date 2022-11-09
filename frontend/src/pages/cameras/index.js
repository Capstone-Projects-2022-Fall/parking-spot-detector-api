import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    CameraDetails,
    CameraInstance,
    CameraPageContainer
} from './cameras.styles';
import { 
    ButtonContainer, 
    FlexRow 
} from '../../app.styles';

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
        <CameraPageContainer>
            <b>Your Registered Cameras</b>
            <div>
                {
                    cameraData.map((item, index) => {
                        const newID = item['_id'];
                        return (
                            <CameraInstance key={index}>
                                <FlexRow>
                                    <div>
                                        <span style={{ paddingRight: '1em' }}>
                                            <b>Camera ID:</b> {newID}
                                        </span>
                                        <div
                                            style={{ 
                                                display: 'flex', flexDirection: 'row', 
                                                padding: '0.0625em 0.125em', borderRadius: '1em',
                                                backgroundColor: 'white' 
                                            }}
                                        >
                                            <ButtonContainer 
                                                backgroundColor="green"
                                            >
                                                <input 
                                                    type='button'
                                                    value='GO'
                                                    onMouseOver={() => {
                                                        setId(newID);
                                                    }}
                                                    onClick={() => {
                                                        setTimeout(() => {
                                                            window.open(`/profile/cameras/${id}/frames`, '_self');
                                                        }, [500]);
                                                    }}
                                                />
                                            </ButtonContainer>
                                            <ButtonContainer
                                                backgroundColor="brown"
                                            >
                                                <input
                                                    type='button'
                                                    value='DISCONNECT' 
                                                />
                                            </ButtonContainer>
                                            <ButtonContainer
                                                backgroundColor="red"
                                            >
                                                <input
                                                    type='button'
                                                    value='DELETE' 
                                                />
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                    <CameraDetails>
                                        <span style={{ color: 'green' }}>ACTIVE</span>
                                    </CameraDetails>
                                </FlexRow>
                            </CameraInstance>
                        );
                    })
                }
            </div>
        </CameraPageContainer>
    );
}

export default UserCameraPage;
