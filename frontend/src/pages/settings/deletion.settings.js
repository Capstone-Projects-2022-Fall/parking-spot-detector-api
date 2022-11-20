import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
    ButtonContainer, Container
} from '../../app.styles';
import { FinalStepDelete } from './settings.styles';

const AccountDeletionPage = () => {
    const [validate, setValidate] = useState(false);

    const validateSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password required')
            .min(8, 'Password needs to be at least 8 characters long'),
        confirmPassword: Yup.string()
            .required('Password needs to be confirmed')
            .oneOf([Yup.ref('password')], 'Passwords must match')
    });
    const formOptions = { resolver: yupResolver(validateSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        setValidate(true);
        return false;
    }

    return (
        <Container>
            <small>
                Change your mind? Return home.
            </small>
            <ButtonContainer
                backgroundColor='purple'
            >
                <input
                    type='button'
                    value='Cancel (opt out)'
                    onClick={() => window.open('/', '_self')}
                />
            </ButtonContainer>
            <br />
            <span>
                <b style={{ fontSize: '20px' }}>Confirm Deletion of Account</b>
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <small>Enter your password</small>
                </label>
                <input
                    name="password"
                    type='password'
                    placeholder='Enter password...'
                    autoComplete='off'
                    style={{ height: '1.5em', margin: '1em' }}
                    {...register('password')}
                    className={
                        `form-control ${errors.password ? 'is-invalid' : ''}`
                    }
                />
                <div className='invalid-feedback'>
                    {errors.password?.message}
                </div>
                <label>
                    <small>Confirm Password</small>
                </label>
                <input
                    name="confirmPassword"
                    type='password'
                    placeholder='Confirm password...'
                    autoComplete='off'
                    style={{ height: '1.5em', margin: '1em' }}
                    {...register('confirmPassword')}
                    className={
                        `form-control ${errors.confirmPassword ? 'is-invalid' : ''}`
                    }
                />
                <div className='invalid-feedback'>
                    {errors.confirmPassword?.message}
                </div>
                <div style={{ padding: '1em' }}>
                    <ButtonContainer backgroundColor='green'>
                        <button type='submit'> Check </button>
                    </ButtonContainer>
                </div>
            </form>
            {
                validate &&
                <FinalStepDelete>
                    <small>
                        Once you click DELETE below, your account will be deleted forever.
                    </small>
                    <ButtonContainer backgroundColor='black'>
                        <input
                            type='button'
                            value='DELETE'
                            onClick={() => {
                                setTimeout(() => {
                                    window.alert("Your account has been terminated. Thank you for using Parking Spot Detector.");
                                    window.open('/', '_self');
                                }, 3000);
                            }}
                        />
                    </ButtonContainer>
                </FinalStepDelete>
            }
        </Container>
    );
};

export default AccountDeletionPage;
