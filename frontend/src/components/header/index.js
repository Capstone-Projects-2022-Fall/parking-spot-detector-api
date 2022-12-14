import React from 'react';
import { 
    HeaderMain,
    HeaderTitle,
    HeaderInputStyle,
    //LogInHeader
} from './header.styles';
import { /*ButtonContainer,*/ FlexRow } from '../../app.styles';

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
                /*loggedIn &&
                <LogInHeader>
                    <FlexRow spaced>
                        <span>Logged in as: {'test user'}</span>
                        <FlexRow spaced width='200px' style={{
                            marginTop: "-1em"
                        }}>
                            <ButtonContainer>
                                <input
                                    value="Profile"
                                    type="button"
                                    style={{ 
                                        padding: '0.5em',
                                        marginTop: '1em'
                                     }} 
                                     onClick={() => window.open('/profile', '_self')}
                                />
                            </ButtonContainer>
                            <ButtonContainer>
                                <input
                                    value="Settings"
                                    type='button'
                                    style={{
                                        padding: '0.5em',
                                        marginTop: '1em'
                                    }} 
                                    onClick={() => window.open('/settings', '_self')}
                                />
                            </ButtonContainer>
                        </FlexRow>
                    </FlexRow>
                </LogInHeader>  */  
            }
        </HeaderMain>
    );
};

export default Header;
