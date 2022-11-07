import React from 'react';
import {  
    RegisterMain,
    RegisterHeading,
    RegisterText
} from './styles.registration';
import {
    FlexRow,
    FlexColumn,
    QRCodeContainer
} from '../../app.styles';
import SignIn from '../../components/signin';
import qrCode from '../../assets/qrcode.svg';

const RegisterPage = () => {
    return (
        <RegisterMain>
            <RegisterText>
                All new users are required to register through their phone. A sign-up form will be made for users to fill out their information and, if applicable, register their camera.
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
                </FlexColumn>
                <FlexColumn>
                    <RegisterHeading>Already a user?</RegisterHeading>
                    <SignIn />
                </FlexColumn>
            </FlexRow>
        </RegisterMain>
    );
}

export default RegisterPage;