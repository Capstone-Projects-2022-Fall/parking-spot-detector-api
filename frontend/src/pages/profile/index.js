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
        user_name: 'test_user'
    });

    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get('http://127.0.0.1:8080/user');
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
                </span>
                <small>{`@${user_name}`}</small>
            </ProfileTitle>
            <div>
                Handicap: {String(handicap)}
            </div>
            <ProfileContainer>
                <ProfileSubcontainer>
                    {address}
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    {phone_number}
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    {email}
                </ProfileSubcontainer>
            </ProfileContainer>
        </ProfileMain>
    );
};

export default ProfilePage;
