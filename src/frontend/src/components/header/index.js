import React from 'react';
import { 
    HeaderMain,
    HeaderTitle,
    HeaderMenu,
    HeaderInputStyle
} from './header.styles';
import { FlexRow } from '../../app.styles';

import mainLogo from '../../assets/mainlogo.png';

const Header = () => {
    return (
        <HeaderMain>
            <FlexRow>
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
                <HeaderMenu>
                    <HeaderInputStyle>
                        <input 
                            type="button"
                            onClick={() => window.open('/register', '_self')}
                            value="Register"
                        />
                    </HeaderInputStyle>
                    <HeaderInputStyle>
                        <input
                            type='button'
                            value='About Us' 
                            onClick={() => window.alert("Come back later")}
                        />
                    </HeaderInputStyle>
                </HeaderMenu>
            </FlexRow>
        </HeaderMain>
    );
};

export default Header;
