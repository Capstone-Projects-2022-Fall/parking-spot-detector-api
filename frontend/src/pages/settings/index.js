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
    ButtonContainer
} from '../../app.styles';

export default function SettingsPage() {
    const [pageContent, setPageContent] = useState('');
    const toggleSettingsContent = (e) => setPageContent(e.target.id);

    const SettingsMenu = () => {
        const settingsButtonsMap = {
            "account": "Account Settings",
            "admin": "Administrator Settings",
            "privacy": "Privacy Settings",
            "community": "Community Settings",
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
                                <b>If you are an administrator for a camera,</b> you are responsible for transferring ownership of or terminating each and every camera entirely. <br/>
                                Learn more at <a href="https://www.google.com" target='_blank' rel='noreferrer'>(this website)</a>.
                            </div>
                            <ButtonContainer backgroundColor='brown'>
                                <input 
                                    type='button'
                                    value='Delete Account'
                                    onClick={() => window.alert("ACCOUNT GONE AAHHHHH")}
                                />
                            </ButtonContainer>
                        </div>
                    </SettingItem>
                </>
            ),
            'admin': (
                <>
                    <SettingItem>
                        <span>Transfer Ownership</span>
                        <div>

                        </div>
                    </SettingItem>
                </>
            ),
            'privacy': (
                <>

                </>
            ),
            'community': (
                <>

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
            'privacy': 'For privacy regarding application',
            'community': 'For group privileges',
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
                <SettingsContentContainer>
                    {
                        setting[page]
                    }
                </SettingsContentContainer>
            </FlexColumn>
        );
    }

    return (
        <SettingsContainer>
            <SettingsTitle>
                Settings
            </SettingsTitle>
            <FlexRow>
                <SettingsMenu />
                <SettingsContent page={pageContent} />
            </FlexRow>
        </SettingsContainer>
    );
}