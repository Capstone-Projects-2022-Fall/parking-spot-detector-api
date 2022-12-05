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
    const [id, setId] = useState('');

    const [regCamera, setRegCamera] = useState('');

    useEffect(() => {
        const fetchCameras = async () => {
            const data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/cameras/');
            const d = data.data;
            setCameraData(d);
            setRegCamera(d[d.length-1]['_id']);
        }; 
        fetchCameras();
    }, []);

    return (
        <CameraPageContainer>
            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <span>
                    <b>Primary Camera:</b> {regCamera}
                </span>
            </div>
            <br/>
            <b>Your Registered Cameras</b>
            <div>
                {
                    cameraData.map((item, index) => {
                        const newID = item['_id'];
                        const active = newID === regCamera;
                        return (
                            <CameraInstance key={index}>
                                <FlexRow spaced>
                                    <div>
                                        <span style={{ 
                                            paddingRight: '1em',
                                            marginBottom: '1.25em'
                                        }}>
                                            <b>Camera ID:</b> {newID}
                                        </span>
                                        <div
                                            style={{ 
                                                display: 'flex', flexDirection: 'row', 
                                                padding: '0.0625em 0.125em', borderRadius: '1em',
                                                backgroundColor: 'white', justifyContent: "space-evenly"
                                            }}
                                        >
                                            <ButtonContainer 
                                                backgroundColor="purple"
                                            >
                                                <input 
                                                    type='button'
                                                    value='VIEW'
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
                                                backgroundColor={
                                                    active ? "brown" : "darkgreen"
                                                }
                                            >
                                                <input
                                                    type='button'
                                                    value={
                                                        active ? "DISCONNECT" : "CONNECT"
                                                    }
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
                                        <span style={{ color: active ? 'green' : "red" }}>
                                            {
                                                active ? "ACTIVE" : "STOPPED"
                                            }
                                        </span>
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
