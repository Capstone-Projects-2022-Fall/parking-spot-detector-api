import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    GroupProfileMain,
    GroupTitle,
    GroupContainer,
    GroupPrivacy,
    //GroupSubcontainer,
    GroupAdminContainer,
    GroupUserContainer,
    GroupMsgContainer,
    GroupUserDisplay,
    GroupAdminDisplay,
} from './groups.styles';

const GroupProfile = () => {
    const [groupProfile, setGroupProfile] = useState({
        name: "",
        privacy: false,
        home_addr: "",
        users: [],
        admins: [],
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
            <GroupTitle>
                <span>{name}</span>
                <small>{home_addr}</small>
                {
                    privacy ? 
                    <GroupPrivacy color="purple">
                        PRIVATE GROUP
                    </GroupPrivacy> : 
                    <GroupPrivacy color='green'>
                        PUBLIC GROUP
                    </GroupPrivacy>
                }
            </GroupTitle>
            <GroupContainer>
                <GroupMsgContainer>
                    { status_update }
                </GroupMsgContainer>
                <GroupAdminContainer>
                    {
                        admins.map((admin, index) => {
                            return (
                                <GroupAdminDisplay key={index}>
                                    <span>{admin}</span>
                                </GroupAdminDisplay>
                            );
                        })
                    }
                </GroupAdminContainer> 
                <GroupUserContainer>
                    {
                        users.map((user, index) => {
                            return (
                                <GroupUserDisplay key={index}>
                                    <span>{user}</span>
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