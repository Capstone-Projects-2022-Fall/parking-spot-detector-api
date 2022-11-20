import React, { useState, useCallback } from 'react';
import { ButtonContainer, Container, FlexColumn, FlexRow } from '../../app.styles';
import { RegisterFormTitle, CameraFormContainer } from './register.styles';

const CameraRegister = () => {
    const [status, setStatus] = useState('');
    const [mask, setMask] = useState({
        preview: '', data: ''
    });

    // for calibration
    const [showManualGPS, setShowManualGPS] = useState(false);
    const [manualGPSCoords, setManualGPSCoords] = useState({
        lat: 0.00, lng: 0.00
    });

    const handleManualGPSState = () => setShowManualGPS(state => !state);
    const handleGPSCoordsChange = useCallback(e => {
        const key = e.target.id;
        setManualGPSCoords({
            ...manualGPSCoords,
            [key]: e.target.value
        });
        console.log(manualGPSCoords);
    });

    const Sep = () => {
        return (
            <div style={{
                width: '80%',
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '1em'
            }} />
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', mask.data);
        /*const res = await fetch('http://', {
            method: "POST",
            body: formData
        });
        if (res) {
            setStatus(res.statusText);
        }*/
    }

    const onHandleMask = (e) => {
        const file = e.target.files[0];
        const img = {
            preview: URL.createObjectURL(file),
            data: file
        }
        setMask(img);
    }

    return (
        <>
            <RegisterFormTitle>
                Camera Registration Form
            </RegisterFormTitle>
            <FlexColumn spaced style={{ marginLeft: '1em' }}>
                <div style={{ padding: '1em 0', maxWidth: '80%' }}>
                    You checked to register a camera. If you believe this was a mistake or do not intend on registering a camera, skip.
                </div>
                <ButtonContainer backgroundColor='red'>
                    <input
                        value='Opt out'
                        type='button'
                        onClick={() => window.open('/', '_self')}
                    />
                </ButtonContainer>
                <div style={{ padding: '1em 0', maxWidth: '80%' }}>
                    Please be mindful that physical camera installation must be done separately. Contact your camera provider for more information.
                </div>
            </FlexColumn>
            <Sep />
            <Container>
                <form onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
                >
                    <CameraFormContainer>
                        <b>Camera Hardware</b>
                        <small>Register physical camera equipment for your administered parking space.</small>
                        <input
                            type='text'
                            placeholder='Camera brand'
                        />
                        <input
                            type='text'
                            placeholder="bottom text"
                        />
                    </CameraFormContainer>
                    <CameraFormContainer>
                        <div style={{
                            borderRadius: '1em', backgroundColor: 'gray',
                            margin: '1em', width: 'fit-content',
                            maxWidth: '1080px', padding: '1em'
                        }}>
                            <b>Upload Parking Area Image</b>
                            <br />
                            <small>To render the parking spots, we need to process an image of what the parking area looks like.</small>
                            <br />
                            <input type='file' name='file' onChange={onHandleMask} />
                            {
                                mask.preview !== '' &&
                                <Container style={{ border: '5px solid black', width: 'fit-content' }}>
                                    <img src={mask.preview} height='360' />
                                </Container>
                            }
                        </div>
                    </CameraFormContainer>
                    {
                        mask.preview !== '' &&
                        <>
                            <CameraFormContainer>
                                <b>Image Processing</b>
                                <small>For image uploads, we will calibrate the distance of the parking spots from the camera</small>
                                <ButtonContainer>
                                    <input
                                        type='button'
                                        value='Start Calibrating'
                                    />
                                </ButtonContainer>
                            </CameraFormContainer>
                            <CameraFormContainer>
                                <b>GPS Calibration</b>
                                <small>Active cameras require geolocation for information purposes.</small>
                                <ButtonContainer>
                                    <input
                                        type='button'
                                        value='Start Calibrating'
                                    />
                                </ButtonContainer>
                                <ButtonContainer
                                    backgroundColor="purple"
                                >
                                    <input
                                        type='button'
                                        value='Manually calibrate'
                                        onClick={handleManualGPSState}
                                    />
                                </ButtonContainer>
                                {
                                    showManualGPS &&
                                    <>
                                        <Container>
                                            <input
                                                id='lat'
                                                type='text'
                                                value={manualGPSCoords.lat}
                                                placeholder='Enter latitude'
                                                onChange={handleGPSCoordsChange}
                                            />
                                            <input
                                                id='lng'
                                                type='text'
                                                value={manualGPSCoords.lng}
                                                placeholder='Enter longitude'
                                                onChange={handleGPSCoordsChange}
                                            />
                                        </Container>
                                        <ButtonContainer>
                                            <input
                                                type='button'
                                                value="SAVE"
                                                onClick={() => {
                                                    handleManualGPSState();
                                                }}
                                            />
                                        </ButtonContainer>
                                    </>
                                }
                            </CameraFormContainer>
                        </>
                    }
                    <CameraFormContainer>
                        <b>Parking Area Details</b>
                        <small>Details can be filled out separately at another time on desktop or app.</small>
                        <br />
                        <input
                            type='text'
                            placeholder='Enter street address...'
                        />
                        <input
                            type='text'
                            placeholder='Number of spots registering...'
                        />
                        <FlexRow>
                            <span>Display on Google Maps</span>
                            <input type='checkbox' />
                        </FlexRow>
                    </CameraFormContainer>
                    <br /><br />
                    <ButtonContainer>
                        <button type='submit'>
                            Finish Camera Registration
                        </button>
                    </ButtonContainer>
                </form>
            </Container>
        </>
    );
};

export default CameraRegister;
