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
    GroupIconContainer,
    PrimaryCameraLink
} from './groups.styles';
import { FlexRow } from '../../app.styles';

import show from '../../assets/show.png';
import hide from '../../assets/hide.png';
import messenger from '../../assets/messenger.png';
import cameraPic from '../../assets/camera.png';

const GroupProfile = () => {
    const [groupProfile, setGroupProfile] = useState({
        name: "", privacy: false,
        home_addr: "",
        users: [], admins: [],
        status_update: "",
        created_on: ''
    });

    const { id } = useParams();

    const [testCamera, setTestCamera] = useState('');

    useEffect(() => {
        const fetchGroup = async () => {
            const data = await axios.get("http://127.0.0.1:8080/group");
            var groupData = data.data;
            groupData = groupData.filter((u) => u['_id'] === id);
            setGroupProfile(groupData[0]);
        };
        fetchGroup();

        const fetchCam = async () => {
            const data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/cameras');
            setTestCamera(data.data[data.data.length-1]._id);
        };
        fetchCam();
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
                <FlexRow>
                    <GroupMsgContainer>
                        <img src={messenger} alt="" />
                        <span>{ status_update }</span>
                    </GroupMsgContainer>
                    <FlexRow>
                        <img src={cameraPic} alt="" style={{ height: '20px', padding: '1em', paddingLeft: '2em' }} />
                        <div style={{ 
                            paddingTop: '1em', display: 'flex', flexDirection: 'column' 
                        }}>
                            <b>Primary camera ID: </b>
                            <PrimaryCameraLink
                                onClick={() => window.open(`/profile/cameras/${testCamera}/frames`, '_blank')}
                            >
                                { testCamera }
                            </PrimaryCameraLink>
                        </div>
                    </FlexRow>
                </FlexRow>
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