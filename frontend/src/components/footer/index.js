import React, { useState } from 'react';
import { ButtonContainer, FlexRow } from '../../app.styles';
import { FooterMain } from './footer.styles';

const Footer = () => {
    const [show, setShow] = useState(false);

    return (
        <FooterMain show={show}>
            <FlexRow spaced>
                <div>
                    Parking Spot Detector
                    <br/>
                    <small>Official company website</small>
                </div>
                <ButtonContainer>
                    <input
                        type='button'
                        value="Hide"
                        onClick={() => {
                            setShow((state) => !state)
                        }} 
                    />
                </ButtonContainer>
            </FlexRow>
        </FooterMain>
    );
};

export default Footer;
