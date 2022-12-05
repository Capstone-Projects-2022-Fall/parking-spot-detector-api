import React from 'react';
import { 
    HeaderMain,
    HeaderTitle,
    HeaderInputStyle,
    LogInHeader
} from './header.styles';
import { ButtonContainer, FlexRow } from '../../app.styles';

import mainLogo from '../../assets/mainlogo.png';

const Header = () => {

    return (
        <HeaderMain>
            <FlexRow spaced>
                <>
                    <img
                        className="logo"
                        src={mainLogo}
                        alt="Parking Spot Logo"
                        onClick={() => window.open('/', '_self')}
                    />
                    <HeaderTitle>
                        Parking Spot Detector
                    </HeaderTitle>
                </>
                <HeaderInputStyle>
                    <input 
                        type="button"
                        onClick={() => window.open('/signup', '_self')}
                        value="Register"
                    />
                    {
                        /*loggedIn ? (
                            <input 
                                type='button'
                                value="Sign Out"
                                onClick={() => {
                                    setTimeout(() => {
                                        handleLogin(false);
                                        window.reload('/');
                                    }, [1000]);
                                }}
                            />    
                        ) : (
                            <input 
                                type="button"
                                onClick={() => window.open('/register', '_self')}
                                value="Register"
                            />
                        )*/
                    }
                </HeaderInputStyle>
            </FlexRow>
            {
                <LogInHeader>
                    <FlexRow spaced>
                        <FlexRow spaced width='300px'>
                            <ButtonContainer>
                                <input
                                    value="Profiles"
                                    type="button"
                                    style={{ 
                                        padding: '0.5em',
                                     }} 
                                     onClick={() => window.open('/profile', '_self')}
                                />
                            </ButtonContainer>
                            <ButtonContainer>
                                <input 
                                    value="Groups"
                                    type="button"
                                    style={{
                                        padding: "0.5em",
                                    }}
                                    onClick={() => window.open('/group', '_self')}
                                />
                            </ButtonContainer>
                            <ButtonContainer>
                                <input
                                    value="Settings"
                                    type='button'
                                    style={{
                                        padding: '0.5em',
                                    }} 
                                    onClick={() => window.open('/settings', '_self')}
                                />
                            </ButtonContainer>
                        </FlexRow>
                    </FlexRow>
                </LogInHeader> 
            }
        </HeaderMain>
    );
};

export default Header;
