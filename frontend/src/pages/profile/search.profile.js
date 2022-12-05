import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ButtonContainer } from '../../app.styles';
import {
    ProfileSearchMain,
    ProfileSearchText,
    ProfileSearchTitle,
    ProfileSearchList,
    ProfileSearchListItem,
    ProfileSearchListDetails
} from './profile.styles';

const ProfileSearch = () => {
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            const data = await axios.get('http://127.0.0.1:8080/profile');
            setProfileData(data.data);
        };
        fetchProfiles();
    }, []);
    
    return (
        <ProfileSearchMain>
            <ProfileSearchTitle>
                PROFILE SEARCH
            </ProfileSearchTitle>
            <ProfileSearchList>
                <ProfileSearchText>
                    User Profiles
                </ProfileSearchText>
                {
                    profileData.map((item, index) => {
                        const username = item['username'];
                        return (
                            <ProfileSearchListItem key={index}>
                                <div>
                                    <span style={{ fontWeight: 'bold' }}>{username}</span>
                                    <span></span>
                                </div>
                                <ProfileSearchListDetails>

                                </ProfileSearchListDetails>
                            </ProfileSearchListItem>
                        );
                    })
                }
            </ProfileSearchList>
        </ProfileSearchMain>
    );
};

export default ProfileSearch;