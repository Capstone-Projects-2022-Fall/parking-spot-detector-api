import React from 'react';
import {
    SignInContainer,
    SignInText,
} from './signin.styles';
import { ButtonContainer } from '../../app.styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import axios from 'axios';

const SignIn = () => {
    //const loginURL = 'http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/login';
    const loginURL = 'http://127.0.0.1:8080/login';

    const loginSchema = Yup.object().shape({
        username: Yup.string().required("User name required"),
        password: Yup.string().required('Password required')
    })

    const formOptions = {
        resolver: yupResolver(loginSchema)
    }

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data) => {
        loginUser(data);
    };

    const loginUser = async (signin) => {
        return await axios({
            method: "POST",
            data: {
                username: signin.username,
                password: signin.password
            },
            withCredentials: true,
            url: loginURL
        })
            .then((res) => console.log(res));
    }

    return (
        <div className='login-wrapper'>
            <SignInContainer>
                <SignInText>Sign In</SignInText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder='Enter user name'
                        type='text'
                        name='username'
                        {...register('username')}
                    />
                    <div className='invalid-user-feedback'>
                        { errors.username?.message }
                    </div>
                    <input
                        placeholder="Enter password"
                        type='password'
                        name='password'
                        {...register('password')}
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
            </SignInContainer>
        </div>
    );
};

export default SignIn;
