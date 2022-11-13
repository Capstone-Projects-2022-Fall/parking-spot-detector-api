import React, { useState, useEffect } from 'react';
import {
    ProfileMain,
    ProfileTitle,
    ProfileContainer,
    ProfileSubcontainer
} from './profile.styles';
import {
    ButtonContainer
} from '../../app.styles';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState({
        _id: '',
        address: '',
        email: '',
        first_name: '',
        handicap: false,
        last_name: '',
        phone_number: '',
        user_name: '',
        register_camera: false
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get('http://127.0.0.1:8080/user');
            //const data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/user');
            var userData = data.data;
            console.log('BEFORE:', userData);
            userData = userData.filter((u) => u['user_name'] === id);
            console.log("AAA:", userData[0]);
            setUserProfile(userData[0]);
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
                    <div>
                        <b>Home address:</b> {address}
                    </div>
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    <div>
                        <b>Phone number:</b> {phone_number}
                    </div>
                </ProfileSubcontainer>
                <ProfileSubcontainer>
                    <div>
                        <b>Email address:</b> {email}
                    </div>
                </ProfileSubcontainer>
            </ProfileContainer>
            <ButtonContainer>
                <input
                    value="Edit Profile"
                    type='button'
                    onClick={() => window.open('/settings', '_self')} 
                />
                <br/>
                <small>Click on 'Account Settings', then to 'Edit Profile'</small>
            </ButtonContainer>
        </ProfileMain>
    );
};

export default ProfilePage;
