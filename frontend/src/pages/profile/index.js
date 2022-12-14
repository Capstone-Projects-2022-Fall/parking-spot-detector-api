import React, { useState, useEffect } from 'react';
import {
    ProfileMain,
    ProfileTitle,
    ProfileContainer,
    ProfileSubcontainer,
    SymbolContainer
} from './profile.styles';
import {
    ButtonContainer,
    FlexRow
} from '../../app.styles';

import wheelchair from '../../assets/wheelchair.png';
import admin from '../../assets/setting.png';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState({
        email: '',
        first_name: '',
        handicap: false,
        last_name: '',
        phone_number: '',
        user_name: '',
        register_camera: false,
        created_on: ''
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get('http://127.0.0.1:8080/user');
            var userData = data.data;
            console.log('BEFORE:', userData);
            userData = userData.filter((u) => u['username'] === id);
            console.log("AAA:", userData[0]);
            setUserProfile(userData[0]);
        };
        fetchUser();
    }, [id]);

    console.log(userProfile);

    const { 
        first_name, last_name, phone_number, email,
        handicap, username, register_camera, created_on
    } = userProfile;
    return (
        <ProfileMain>
            <ProfileTitle>
                <span>
                    {`${first_name} ${last_name}`}
                </span>
                <small>{`@${username}`}</small>
            </ProfileTitle>
            <FlexRow>
                <SymbolContainer>
                    {handicap && <img src={wheelchair} alt="" />}
                </SymbolContainer>
                <SymbolContainer>
                    {register_camera && <img src={admin} alt="" />}
                </SymbolContainer>
            </FlexRow>
            <ProfileContainer>
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
                <ProfileSubcontainer>
                    <div>
                        <b>Creation date: </b> {created_on}
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
