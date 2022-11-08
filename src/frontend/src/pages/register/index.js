import React from 'react';
import {  
    RegisterMain,
    RegisterHeading,
    RegisterText
} from './register.styles';
import {
    FlexRow,
    FlexColumn,
    QRCodeContainer,
    ButtonContainer
} from '../../app.styles';
import SignIn from '../../components/signin';
import qrCode from '../../assets/qrcode.svg';

const RegisterPage = ({ loggedIn, handleLogin }) => {
    return (
        <RegisterMain>
            <RegisterText>
                All new users can register through either by this website or mobile app. <br/>
                <i>If registering with a camera, users must return to the desktop website to finish additional registration.</i>
            </RegisterText>
            <FlexRow>
                <FlexColumn>
                    <RegisterHeading>First time users?</RegisterHeading>
                    <QRCodeContainer>
                        <img
                            src={qrCode} 
                            alt="QR Code for App"
                        />
                    </QRCodeContainer>
                    <ButtonContainer>
                        <input
                            value='Continue registering on desktop'
                            type='button' 
                            onClick={() => window.open('/register/form', '_self')}
                        />
                    </ButtonContainer>
                </FlexColumn>
                <FlexColumn>
                    <RegisterHeading>Already a user?</RegisterHeading>
                    <SignIn
                        loggedIn={loggedIn}
                        handleLogin={handleLogin} 
                    />
                </FlexColumn>
            </FlexRow>
        </RegisterMain>
    );
}

export default RegisterPage;