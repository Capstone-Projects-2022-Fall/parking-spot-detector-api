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
                    />
                    <HeaderTitle>
                        Parking Spot Detector
                    </HeaderTitle>
                </>
                <HeaderMenu>
                    <HeaderInputStyle>
                        <input 
                            value="Log in"
                            type="button"
                        />
                    </HeaderInputStyle>
                    <HeaderInputStyle>
                        <input
                            type='button'
                            value='About Us' 
                        />
                    </HeaderInputStyle>
                </HeaderMenu>
            </FlexRow>
        </HeaderMain>
    );
};

export default Header;
