import React from 'react';
import {
    ButtonContainer,
    Container,
    FlexColumn
} from '../../app.styles';

const AccountDeletionPage = () => {
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
            <br/>
            <span>
                <b style={{ fontSize: '20px' }}>Confirm Deletion of Account</b>
            </span>
            <FlexColumn style={{ width: '50%' }}>
                <input 
                    type='password'
                    placeholder='Enter password...'
                    style={{ height: '1.5em', margin: '1em' }}
                />
                <input
                    type='password'
                    placeholder='Confirm password...' 
                    style={{ height: '1.5em', margin: '1em' }}
                />
            </FlexColumn>
            <small>
                Once you submit below, your account will be deleted forever.
            </small>
            <ButtonContainer
                backgroundColor='black'
            >
                <input
                    type='button'
                    value='DELETE' 
                    onClick={() => window.alert("Your account has been terminated. Thank you for using Parking Spot Detector.")}
                />
            </ButtonContainer>
        </Container>
    );
};

export default AccountDeletionPage;
