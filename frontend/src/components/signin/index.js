import React, { useState } from 'react';
import {
    SignInContainer,
    SignInText,
    TogglePiece
} from './signin.styles';
import { ButtonContainer, FlexRow } from '../../app.styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import PropTypes from 'prop-types';

const SignIn = ({ setToken }) => {
    /* BY DEFAULT: use phone number (but can use email if desired) */
    const [useEmail, setUseEmail] = useState(false);

    const [signin, setSignin] = useState({
        user: '',
        pass: ''
    })

    // new components for form & Yup
    const phoneNumberSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .required("Phone number required")
            .matches(/^[0-9]+$/, "This input only takes numbers")
            .min(10, "Must be at least 10 numbers long")
            .max(13, 'Must be no more than 13 numbers long'),
        password: Yup.string().required('Password required')
    }),
    emailSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email required")
            .matches(/^\S+@\S+.\S+$/, "Email should be a proper format"),
        password: Yup.string().required('Password required')
    });

    const formOptions = {
        resolver: yupResolver(useEmail ? emailSchema : phoneNumberSchema)
    }

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data) => {
        const token = loginUser(signin);
        setToken(token);
    };

    const loginUser = async (credentials) => {
        return await fetch('http://127.0.0.1:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        .then((data) => data.json());
    }

    const ToggleLoginInfo = () => {
        return (
            <FlexRow spaced>
                <TogglePiece
                    className='phone'
                    selected={!!!useEmail}
                    onClick={() => {
                        setUseEmail(false);
                    }}
                >
                    PHONE
                </TogglePiece>
                <TogglePiece
                    className='email'
                    selected={useEmail}
                    onClick={() => {
                        setUseEmail(true);
                    }}
                >
                    EMAIL
                </TogglePiece>
            </FlexRow>
        );
    };

    return (
        <div className='login-wrapper'>
            <SignInContainer>
                <SignInText>Sign In</SignInText>
                <ToggleLoginInfo />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder={ useEmail ? 'Enter email' : 'Enter phone number' }
                        type='text'
                        name={ useEmail ? 'email' : 'phoneNumber' }
                        {...register(useEmail ? 'email' : 'phoneNumber')}
                        onChange={(e) => setSignin({
                            ...signin, user: e.target.value
                        })}
                    />
                    <div className='invalid-user-feedback'>
                        { useEmail ? errors.email?.message : errors.phoneNumber?.message }
                    </div>
                    <input
                        placeholder="Enter password"
                        type='password'
                        name='password'
                        {...register('password')}
                        onChange={(e) => setSignin({
                            ...signin, pass: e.target.value
                        })}
                    />
                    <div className='invalid-pass-feedback'>
                        { errors.password?.message }
                    </div>
                    <br />
                    <ButtonContainer backgroundColor='green'>
                        <button type='submit'>
                            Sign In
                        </button>
                    </ButtonContainer>
                </form>
                <input
                    value="Forgot Password?"
                    type='button'
                    onClick={() => {
                        setTimeout(() => {
                            //handleLogin(true);
                            window.reload('/');
                        }, 1000);
                    }}
                />
            </SignInContainer>
        </div>
    );
};

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default SignIn;
