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
            const data = await axios.get('http://127.0.0.1:8080/user');
            setProfileData(data.data);
        };
        fetchProfiles();
    }, []);

    const handleDeleteUser = async (id) => {
        await axios.delete(`http://127.0.0.1:8080/user/${id}`)
            .then((res) => {
                setProfileData((data) => {
                    data.filter((item) => item._id !== id)
                });
                console.log(res);
            })
            .catch((err) => console.error(err));
    };
    
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
                        const username = item['username'], mail = item['email'], userID = item['_id'];
                        return (
                            <ProfileSearchListItem key={index}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: 'bold' }}>@{username}</span>
                                    <span>{mail}</span>
                                </div>
                                <ProfileSearchListDetails>
                                    <ButtonContainer backgroundColor="green">
                                        <input 
                                            type='button'
                                            value="GO"
                                            onClick={() => {
                                                window.open(`/profile/${username}/page`, '_blank');
                                            }}
                                        />
                                    </ButtonContainer>
                                    <ButtonContainer backgroundColor="red">
                                        <input 
                                            type='button'
                                            value="DELETE"
                                            onClick={() => handleDeleteUser(userID)}
                                        />
                                    </ButtonContainer>
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