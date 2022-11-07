import React, { useState } from 'react';

import { Container, FlexRow, FlexColumn } from '../../app.styles';
import { RegisterFormTitle, RegisterFormTidbit } from './styles.registration';

import TextField from '../../components/textfield';

const RegisterForm = () => {
    const [willRegisterCamera, setWillRegisterCamera] = useState(false);
    const [submitAttempt, setSubmitAttempt] = useState(false);
    const [newUserData, setNewUserData] = useState({
        userName: '',
        phoneNumber: '',
        password: '',
    })

    const validEntries = () => {
        const { userName, phoneNumber } = newUserData;
        if (userName.length < 8 || phoneNumber.length < 10) {
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
            />
            <TextField 
                placeholder='Enter your last name'
            />
            <TextField
                placeholder="Enter user name"
                value="userName"
                onChange={handleChange}
            />
            <RegisterFormTidbit>
                User name must be at least 8 characters long.
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
            />
            <TextField
                placeholder="Enter your password"
                special='password'
            />
            <TextField
                placeholder="Confirm password"
                special='password'
            />
            <RegisterFormTidbit>
                Passwords must match, and should be at least 8 characters long.
            </RegisterFormTidbit>
            <Container style={{ width: 'fit-content' }}>
                <FlexRow>
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