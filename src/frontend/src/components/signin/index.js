import React, { useState } from 'react';
import {
    SignInContainer,
    SignInText,
    SignInButtonStyles,
    TogglePiece
} from './signin.styles';
import {
    FlexRow
} from '../../app.styles';
import TextField from '../textfield';

const SignIn = ({ loggedIn, handleLogin }) => {
    const [loginData, setLoginData] = useState({
        phoneNumber: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        var { id, value } = e.target;
        setLoginData({
            ...loginData,
            [id]: value
        })
    }

    /*  extra component for toggling between email & phone number  */
    /* BY DEFAULT: use phone number (but can use email if desired) */
    const [useEmail, setUseEmail] = useState(false);
    const ToggleLoginInfo = () => {
        return (
            <FlexRow>
                <TogglePiece 
                    className='phone' 
                    selected={!!!useEmail}
                    onClick={() => setUseEmail(false)}
                >
                    PHONE
                </TogglePiece>
                <TogglePiece 
                    className='email' 
                    selected={useEmail}
                    onClick={() => setUseEmail(true)}
                >
                    EMAIL
                </TogglePiece>
            </FlexRow>
        );
    };
    

    return (
        <SignInContainer>
            <SignInText>Sign In</SignInText>
            <ToggleLoginInfo />
            <TextField 
                placeholder={
                    useEmail ? 'Enter email address' : 'Enter phone number'
                }
                special={
                    useEmail ? 'email' : 'tel'
                }
                value={
                    useEmail ? 'email' : 'phoneNumber'
                }
                onChange={handleInputChange}
            />
            <TextField 
                placeholder="Enter password"
                special='password'
                value='password'
                onChange={handleInputChange}
            />
            <br/>
            <SignInButtonStyles>
                <input 
                    value='Sign In'
                    type='button'
                />
            </SignInButtonStyles>
            <input 
                value="Forgot Password?"
                type='button'
                onClick={() => {
                    setTimeout(() => {
                        handleLogin(true);
                        window.reload('/');
                    }, [1000]);
                }}
            />
        </SignInContainer>
    );
};

export default SignIn;
