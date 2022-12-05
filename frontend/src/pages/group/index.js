import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    GroupProfileMain,
    GroupTitle,
    GroupContainer,
    GroupAdminContainer,
    GroupUserContainer,
    GroupMsgContainer,
    GroupUserDisplay,
    GroupAdminDisplay,
    GroupSubcontainer,
    GroupIconContainer
} from './groups.styles';

import show from '../../assets/show.png';
import hide from '../../assets/hide.png';
import messenger from '../../assets/messenger.png';

const GroupProfile = () => {
    const [groupProfile, setGroupProfile] = useState({
        name: "", privacy: false,
        home_addr: "",
        users: [], admins: [],
        status_update: "",
        created_on: ''
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchGroup = async () => {
            const data = await axios.get("http://127.0.0.1:8080/group");
            var groupData = data.data;
            groupData = groupData.filter((u) => u['_id'] === id);
            setGroupProfile(groupData[0]);
        };
        fetchGroup();
    }, [id]);

    const {
        name, privacy, home_addr, users, admins, status_update
    } = groupProfile;
    return (
        <GroupProfileMain>
            <GroupSubcontainer row>
                <GroupIconContainer private={privacy}>
                    {
                        privacy ? 
                        <img alt="" src={hide} /> :
                        <img alt="" src={show} />
                    }
                </GroupIconContainer>
                <GroupTitle>
                    <span>{name}</span>
                    <small>{home_addr}</small>
                </GroupTitle>
            </GroupSubcontainer>
            <GroupContainer>
                <GroupMsgContainer>
                    <img src={messenger} alt="" />
                    <span>{ status_update }</span>
                </GroupMsgContainer>
                <b style={{ padding: '1em' }}>ADMINS</b>
                <GroupAdminContainer>
                    {
                        admins.map((admin, index) => {
                            return (
                                <GroupAdminDisplay key={index}>
                                    <span
                                        onClick={() => window.open(`/profile/${admin}/page`, '_blank')}
                                    >
                                        {admin}
                                    </span>
                                </GroupAdminDisplay>
                            );
                        })
                    }
                </GroupAdminContainer>
                <b style={{ padding: '1em' }}>USERS</b>
                <GroupUserContainer>
                    {
                        users.map((user, index) => {
                            return (
                                <GroupUserDisplay key={index}>
                                    <span
                                        onClick={() => window.open(`/profile/${user}/page`, '_blank')}
                                    >
                                        {user}
                                    </span>
                                </GroupUserDisplay>
                            );
                        })
                    }
                </GroupUserContainer>            
            </GroupContainer>
        </GroupProfileMain>
    );
};

export default GroupProfile;