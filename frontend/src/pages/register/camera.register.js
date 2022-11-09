import React from 'react';
import { ButtonContainer, Container, FlexRow } from '../../app.styles';
import TextField from '../../components/textfield';
import { RegisterFormTidbit, RegisterFormTitle } from './register.styles';

const CameraRegister = () => {
    return (
        <>
            <RegisterFormTitle>
                Camera Registration Form
            </RegisterFormTitle>
            <FlexRow spaced width='50%'>
                <RegisterFormTidbit style={{ padding: '0.5em', margin: '0.5em' }}>
                    You checked to register a camera. If you believe this was a mistake or do not intend on registering a camera, skip.
                </RegisterFormTidbit>
                <ButtonContainer backgroundColor='red'>
                    <input
                        value='Opt out'
                        type='button' 
                        onClick={() => window.open('/', '_self')}
                    />
                </ButtonContainer>
            </FlexRow>
            <Container>
                <TextField
                    placeholder='Camera brand' 
                />
                <TextField
                    placeholder="bottom text" 
                />
                <br />
                <input
                    type='submit'
                    value='Complete Camera Registration' 
                />
            </Container>
        </>
    );
};

export default CameraRegister;
