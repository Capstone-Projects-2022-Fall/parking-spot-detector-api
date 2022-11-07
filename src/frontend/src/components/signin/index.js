import React from 'react';
import {
    SignInContainer,
    SignInText,
    SignInButtonStyles
} from './signin.styles';
import TextField from '../textfield';

const SignIn = () => {
    return (
        <SignInContainer>
            <SignInText>Sign In</SignInText>
            <TextField 
                placeholder="Enter phone number"
                special='tel'
            />
            <TextField 
                placeholder="Enter password"
                special='password'
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
            />
        </SignInContainer>
    );
};

export default SignIn;
