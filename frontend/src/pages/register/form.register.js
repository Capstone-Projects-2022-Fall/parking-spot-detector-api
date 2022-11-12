import React, { useState } from 'react';

import { Container, FlexRow, FlexColumn } from '../../app.styles';
import { RegisterFormTitle, RegisterFormTidbit } from './register.styles';

import TextField from '../../components/textfield';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RegisterForm = () => {
    const newUserSchema = Yup.object().shape({
        firstName: '',
        lastName: '',
        userName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        admin: ''
    });

    const [willRegisterCamera, setWillRegisterCamera] = useState(false);
    const [submitAttempt, setSubmitAttempt] = useState(false);

    const validEntries = () => {
        const { 
            firstName, lastName, userName, 
            phoneNumber, email, password, confirmPassword 
        } = newUserData;
        /* passwords do not match or are not the correct length */
        if (password !== confirmPassword || (password.length < 8 && confirmPassword.length < 8)) {
            setSubmitAttempt(true);
            return false;
        }
        /* user name or phone number lengths are incomptiable */
        if (userName.length < 6 || phoneNumber.length < 10) {
            setSubmitAttempt(true);
            return false;
        }
        /* & if any other fields are not filled in */
        if (firstName.length < 1 || lastName.length < 1 || !email.includes('@')) {
            setSubmitAttempt(true);
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        var { id, value } = e.target;
        setNewUserData({
            ...newUserData,
            [id]: value
        });
        console.log(newUserData);
    };

    return (
        <>
            <RegisterFormTitle>
                Registration for New Account
            </RegisterFormTitle>
            <TextField 
                placeholder='Enter your first name'
                value='firstName'
                onChange={handleChange}
            />
            <TextField 
                placeholder='Enter your last name'
                value='lastName'
                onChange={handleChange}
            />
            <TextField
                placeholder="Enter user name"
                value="userName"
                onChange={handleChange}
            />
            <RegisterFormTidbit>
                User name must be at least 6 characters long.
            </RegisterFormTidbit>
            <TextField
                placeholder="Enter your phone number"
                value="phoneNumber"
                onChange={handleChange}
            />
            <RegisterFormTidbit>
                Phone number should be written as 1234567890
            </RegisterFormTidbit>
            <TextField 
                placeholder='Enter your email address'
                value='email'
                onChange={handleChange}
            />
            <TextField
                placeholder="Enter your password"
                special='password'
                value='password'
                onChange={handleChange}
            />
            <TextField
                placeholder="Confirm password"
                special='password'
                value='confirmPassword'
                onChange={handleChange}
            />
            <RegisterFormTidbit>
                Passwords must match, and should be at least 8 characters long.
            </RegisterFormTidbit>
            <Container style={{ width: 'fit-content' }}>
                <FlexRow spaced>
                    <b>Are you registering a camera?</b>
                    <input
                        type='checkbox'
                        onClick={() => {
                            setWillRegisterCamera(state => !state)
                        }}
                    />
                </FlexRow>
                {
                    willRegisterCamera &&
                    <>
                        <span style={{ padding: '0.25em' }}>
                            Please follow the directions to installing and registering your <br /> camera after completing this registration form.
                        </span>
                    </>
                }
            </Container>
            <FlexColumn>
                <input
                    type='submit'
                    value='Complete Registration'
                    onClick={() => {
                        if (!!!validEntries()) {
                            return;
                        };
                        setTimeout(() => {
                            window.open(
                                willRegisterCamera ? '/register/camera' : '/',
                                '_self'
                            )
                        }, [3000])
                    }}
                    style={{ width: 'fit-content', height: '2em' }}
                />
                {
                    submitAttempt &&
                    <span style={{ color: 'purple' }}>
                        Check that all requirements are met for input fields. <br/>
                    </span>
                }
            </FlexColumn>
        </>
    );
};

export default RegisterForm;