import React, { useState, useEffect } from 'react';
import {
    ProfileMain,
    ProfileTitle,
    ProfileContainer,
    ProfileSubcontainer
} from './profile.styles';
import axios from 'axios';

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState({
        address: '',
        email: '',
        first_name: '',
        handicap: false,
        last_name: '',
        phone_number: '',
        user_name: ''
    });

    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get('http://127.0.0.1:8080/user');
            //const data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/user');
            const user = data.data[0];
            user['user_name'] = 'test_user'
            setUserProfile(user);
        };
        fetchUser();
    }, []);

    console.log(userProfile);

    const { 
        first_name, last_name, address, 
        phone_number, email, handicap, user_name 
    } = userProfile;
    return (
        <ProfileMain>
            <ProfileTitle>
                <span>
                    {`${first_name} ${last_name}`}
                    <input
                        style={{ margin: '0.25em 0.5em' }}
                        type='button'
                        value='Edit' 
                    />
                </span>
                <small>{`@${user_name}`}</small>
            </ProfileTitle>
            <div>
                Handicap: {String(handicap)}
                <input 
                    style={{ margin: '0.25em 0.5em' }}
                    type='button'
                    value='Edit'
                />
            </div>
            <ProfileContainer>
                <ProfileSubcontainer>
                    <div>
                        <b>Home address:</b> {address}
                    </div>
                    <input
                        value='Edit'
                        type='button' 
                    />
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    <div>
                        <b>Phone number:</b> {phone_number}
                    </div>
                    <input
                        value='Edit'
                        type='button' 
                    />
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    <div>
                        <b>Email address:</b> {email}
                    </div>
                    <input
                        value='Edit'
                        type='button' 
                    />
                </ProfileSubcontainer>
            </ProfileContainer>
        </ProfileMain>
    );
};

export default ProfilePage;
