import React, { useState } from 'react';
import { 
    Container, 
    FlexRow, 
    FlexColumn, 
    ButtonContainer,
    Separator
} from '../../app.styles';
import { RegisterFormTitle, RegisterFormInstructions } from './register.styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import md5 from 'md5';
import axios from 'axios';

const RegisterForm = () => {
    const [willRegisterCamera, setWillRegisterCamera] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [newUserId, setNewUserId] = useState('');

    const newUserSchema = Yup.object().shape({
        first_name: Yup.string()
            .required("First name required"),
        last_name: Yup.string()
            .required("Last name required"),
        user_name: Yup.string()
            .required('User name required')
            .matches(/^[a-zA-Z0-9_]+[^ ]$/, "User name should only have numbers, letters, & underspaces")
            .min(3, "Username must be at least 3 characters long")
            .max(20, "Username should be no longer than 20 characters"),
        phone_number: Yup.string()
            .required("Phone number required")
            .matches(/^[0-9]+$/, "Phone number needs to contain only numbers")
            .min(10, "Minimum of 10 characters")
            .max(13, "Maximum of 13 characters"),
        email: Yup.string()
            .required("Email address required")
            .matches(/^\S+@\S+.\S+$/, "Email should be a proper format"),
        password: Yup.string()
            .required('Password required')
            .min(8, 'Password needs to be at least 8 characters long'),
        confirm_password: Yup.string()
            .required("Password needs to be confirmed")
            .oneOf([Yup.ref('password')], 'Passwords must match to proceed'),
        handicap: Yup.boolean(),
        register_camera: Yup.boolean()
    });

    const formOptions = { resolver: yupResolver(newUserSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    const postData = async (data) => {
        if (data.password === data.confirm_password) {
            data['password_hash'] = md5(data.password);
            delete data['password'];
            delete data['confirm_password'];
            data['created_on'] = new Date().toDateString().substring(4);
            await axios.post('http://127.0.0.1:8080/user', data, {
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    const v = res.data;
                    setNewUserId(v['user_name']);
                })
                .catch((err) => console.error(err));
        }
        return false;
    }

    const onSubmit = (data) => {
        const temp = data;
        if (postData(temp)) {
            setCompleted(true);
        }
    }

    return (
        <>
            <FlexColumn>
                <RegisterFormTitle>
                    Registration for New Account
                </RegisterFormTitle>
                <RegisterFormInstructions>
                    <small>
                        Usernames must only contain letters, numbers, and underspaces <br/> 3-20 characters in length.
                    </small>
                    <Separator />
                    <small>
                        Phone number should be in format 1234567890
                    </small>
                    <Separator />
                    <small>
                        Email address must have '@' and a proper domain name
                    </small>
                </RegisterFormInstructions>
            </FlexColumn>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Enter your first name'
                    name='first_name'
                    {...register('first_name')}
                />
                <div className='invalid-feedback'>
                    { errors.first_name?.message }
                </div>
                <input  
                    type='text'
                    placeholder='Enter your last name'
                    name='last_name'
                    {...register('last_name')}
                />
                <div className='invalid-feedback'>
                    { errors.last_name?.message }
                </div>
                <input 
                    type='text'
                    placeholder="Enter user name"
                    name="user_name"
                    {...register('user_name')}
                />
                <div className='invalid-feedback'>
                    { errors.user_name?.message }
                </div>
                <input
                    type='text'
                    placeholder="Enter your phone number"
                    name="phone_number"
                    {...register('phone_number')}
                />
                <div className='invalid-feedback'>
                    { errors.phone_number?.message }
                </div>
                <input 
                    type='text'
                    placeholder='Enter your email address'
                    name='email'
                    {...register('email')}
                />
                <div className='invalid-feedback'>
                    { errors.email?.message }
                </div>
                <input
                    placeholder="Enter your password"
                    type='password'
                    name='password'
                    {...register('password')}
                />
                <div className='invalid-feedback'>
                    { errors.password?.message }
                </div>
                <input
                    placeholder="Confirm password"
                    type='password'
                    name='confirm_password'
                    {...register('confirm_password')}
                />
                <div className='invalid-feedback'>
                    { errors.confirm_password?.message }
                </div>
                <br/>
                <Container style={{ width: 'fit-content' }}>
                    <FlexRow spaced>
                        <b>Are you handicapped?</b>
                        <input 
                            type='checkbox'
                            name='handicap'
                            {...register('handicap')}
                        />
                    </FlexRow>
                </Container>
                <Container style={{ width: 'fit-content' }}>
                    <FlexRow spaced>
                        <b>Are you registering a camera?</b>
                        <input
                            type='checkbox'
                            name='register_camera'
                            {...register('register_camera')}
                            onClick={() => {
                                setWillRegisterCamera(state => !state);
                            }}
                        />
                    </FlexRow>
                    {
                        willRegisterCamera &&
                        <span style={{ padding: '0.25em' }}>
                            Please follow the directions to installing and registering your <br /> camera after completing this registration form.
                        </span>
                    }
                </Container>
                <ButtonContainer backgroundColor='green'>
                    <button disabled={isSubmitting} type='submit'>
                        Complete Registration
                    </button>
                </ButtonContainer>
                {
                    completed && !willRegisterCamera && 
                    <span>
                        Your profile is ready!
                        <ButtonContainer>
                            <input 
                                type='button'
                                value='Go to Profile'
                                onMouseOver={() => {
                                    setNewUserId(newUserId);
                                }}
                                onClick={() => {
                                    setTimeout(() => {
                                        window.open(`/profile/${newUserId}`, '_self');
                                    }, 500);
                                }}
                            />
                        </ButtonContainer>
                    </span>
                }
                {
                    completed && willRegisterCamera &&
                    <span>
                        Redirecting to the camera registration form...
                        <span style={{ display: 'none' }}>
                        {
                            setTimeout(() => {
                                window.open('/signup/camera', '_self');
                            }, 3000)
                        }
                        </span>
                    </span>
                }
            </form>
        </>
    );
};

export default RegisterForm;