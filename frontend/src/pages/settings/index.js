import React, { useState } from 'react';
import {
    SettingsContainer,
    SettingsTitle,
    SettingsContentContainer,
    SettingsMenuContainer,
    SettingsMenuButton,
    SettingsContentTitle,
    SettingsContentSubtitle,
    SettingItem
} from './settings.styles';
import {
    FlexRow,
    FlexColumn,
    ButtonContainer,
    Container
} from '../../app.styles';

export default function SettingsPage() {
    const [pageContent, setPageContent] = useState('');
    const toggleSettingsContent = (e) => setPageContent(e.target.id);

    // for ownership transfer
    const [incomingTransferReqs, setIncomingTransferReqs] = useState([]);
    const [newOwner, setNewOwner] = useState('');

    // for image upload
    const [mask, setMask] = useState({
        preview: '', data: ''
    });
    const onHandleNewMask = (e) => {
        const file = e.target.files[0];
        const img = {
            preview: URL.createObjectURL(file),
            data: file
        };
        setMask(img);
    }

    const SettingsMenu = () => {
        const settingsButtonsMap = {
            "account": "Account Settings",
            "admin": "Administrator Settings",
            "camera": "Camera Settings"
        };
        return (
            <SettingsMenuContainer>
                {
                    Object.keys(settingsButtonsMap).map((key, index) => {
                        return (
                            <SettingsMenuButton
                                key={index}
                            >
                                <input
                                    id={key}
                                    value={settingsButtonsMap[key]}
                                    type='button'
                                    onClick={toggleSettingsContent} 
                                />
                            </SettingsMenuButton>
                        );
                    })
                }
            </SettingsMenuContainer>
        );
    }

    const SettingsContent = ({ page }) => {
        const setting = {
            'account': (
                <>
                    <SettingItem>
                        <span>Edit Profile</span>
                        <div>
                            
                        </div>
                    </SettingItem>
                    <SettingItem>
                        <span>Account Deletion</span>
                        <div>
                            <div style={{ margin: '1em 0', fontSize: '14px' }}>
                                <u>Warning: Doing this is permanent.</u> <br/>
                                <b>If you are an administrator for a camera,</b> you are responsible for transferring ownership of or terminating each and every camera entirely.
                            </div>
                            <ButtonContainer backgroundColor='brown'>
                                <input 
                                    type='button'
                                    value='Delete Account'
                                    onClick={() => window.open("/settings/delete", '_self')}
                                />
                            </ButtonContainer>
                        </div>
                    </SettingItem>
                </>
            ),
            'admin': (
                <>
                    <SettingItem>
                        <span>Request Transfer of Ownership</span>
                        <br/>
                        {
                            incomingTransferReqs.length > 0 &&
                            <Container
                                style={{ margin: '0.25em', borderRadius: '1em' }}
                            >
                                <b>Incoming Requests</b>
                                {
                                    incomingTransferReqs.map((item, index) => {
                                        return (
                                            <Container key={index}
                                                style={{ backgroundColor: 'lightgray', margin: '1em', borderRadius: '1em' }}
                                            >
                                                <b>@{item}</b>
                                                <FlexRow>
                                                    <ButtonContainer
                                                        backgroundColor='green'
                                                    >
                                                        <input 
                                                            type='button'
                                                            value='Accept'
                                                        />
                                                    </ButtonContainer>
                                                    <ButtonContainer
                                                        backgroundColor='red'
                                                    >
                                                        <input 
                                                            type='button'
                                                            value='Deny'
                                                        />
                                                    </ButtonContainer>
                                                </FlexRow>
                                            </Container>
                                        );
                                    })
                                }
                            </Container>
                        }
                        {
                            incomingTransferReqs.length > 0 &&
                            <>
                                <br/>
                                <b>Enter your request</b>
                            </>
                        }
                        <div>
                            <input 
                                type='text'
                                placeholder='Enter username of new owner'
                                style={{ width: '80%' }}
                            />
                            <FlexRow>
                                <small>Clear all history upon transfer</small>
                                <input 
                                    type='checkbox'
                                />
                            </FlexRow>
                            <br/>
                            <ButtonContainer>
                                <input 
                                    type='button'
                                    value='Request Transfer'
                                />
                            </ButtonContainer>
                        </div>
                    </SettingItem>
                </>
            ),
            'camera': (
                <>
                    <SettingItem>
                        <span>Port Forwarding</span>
                        <div>

                        </div>
                    </SettingItem>
                    <SettingItem>
                        <span>Calibration</span>
                        <div>
                            <FlexColumn style={{ padding: '0.5em' }}>
                                <b>Image Processing</b>
                                <small>Re-calibrate image</small>
                                <ButtonContainer>
                                    <input 
                                        type='button'
                                        value='Re-calibrate'
                                    />
                                </ButtonContainer>
                                <br/>
                                <small>Reupload image to calibrate</small>
                                <input type='file' name='file' onChange={onHandleNewMask} />
                                {
                                    mask.preview !== '' &&
                                    <>
                                        <Container style={{ width: 'fit-content' }}>
                                            <img src={mask.preview} height='360' />
                                        </Container>
                                        <ButtonContainer>
                                            <input 
                                                type='button'
                                                value="Save Image"
                                                onClick={() => window.alert('SAVE')}
                                            />
                                        </ButtonContainer>
                                    </>
                                }
                            </FlexColumn>
                            <FlexColumn style={{ padding: '0.5em' }}>
                                <b>GPS Re-calibration</b>
                                <small>Re-calibrate the location of camera</small>
                                <ButtonContainer>
                                    <input 
                                        type='button'
                                        value='Re-calibrate'
                                    />
                                </ButtonContainer>
                            </FlexColumn>
                        </div>
                    </SettingItem>
                    <SettingItem>
                        <span>Other Hardware</span>
                        <div>
                            <FlexColumn style={{ padding: '0.5em' }}>
                                <b>Compass</b>
                                <small>For measuring location of camera</small>
                                <div>

                                </div>
                            </FlexColumn>
                            <FlexColumn style={{ padding: '0.5em' }}>
                                <b>Magnetometer</b>
                                <small>For measuring orientation/POV</small>
                                <div>
                                    
                                </div>
                            </FlexColumn>
                        </div>
                    </SettingItem>
                </>
            )
        };

        const pageExplanations = {
            'account': 'For user profile',
            'admin': 'For administrative privileges',
            'camera': 'For hardware camera components'
        };

        return (
            <FlexColumn>
                <SettingsContentTitle>
                    {
                        pageContent.substring(0, 1).toUpperCase() + pageContent.substring(1)
                    }
                </SettingsContentTitle>
                <SettingsContentSubtitle>
                    {
                        pageExplanations[pageContent]
                    }
                </SettingsContentSubtitle>
                <SettingsContentContainer show={pageContent !== ''}>
                    {
                        setting[page]
                    }
                </SettingsContentContainer>
            </FlexColumn>
        );
    }

    return (
        <SettingsContainer>
            <SettingsTitle> Settings </SettingsTitle>
            <FlexRow>
                <SettingsMenu />
                <SettingsContent page={pageContent} />
            </FlexRow>
        </SettingsContainer>
    );
}