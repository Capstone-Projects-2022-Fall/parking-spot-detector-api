import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    GroupSearchContainer,
    GroupSearchTitle,
    GroupSearchText,
    GroupSearchList,
    GroupSearchListItem,
    GroupSearchListDetails
} from './groups.styles';
import { ButtonContainer } from '../../app.styles';

const GroupSearch = () => {
    const [groupData, setGroupData] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        const fetchGroups = async () => {
            const data  = await axios.get('http://127.0.0.1:8080/group');
            setGroupData(data.data);
        };
        fetchGroups();
    }, []);
    
    return (
        <GroupSearchContainer>
            <GroupSearchTitle>
                GROUP SEARCH
            </GroupSearchTitle>
            <GroupSearchList>
                <GroupSearchText>
                    Groups
                </GroupSearchText>
                {
                    groupData.map((item, index) => {
                        const newID = item['_id'];
                        const groupName = item['name'];
                        return (
                            <GroupSearchListItem key={index}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: 'bold' }}>Group name: {groupName}</span>
                                    <span>Group ID: {newID}</span>
                                </div>
                                <GroupSearchListDetails>
                                    <ButtonContainer backgroundColor='green'>
                                        <input 
                                            type='button'
                                            value="GO"
                                            onMouseOver={() => {
                                                setId(newID);
                                            }}
                                            onClick={() => {
                                                setTimeout(() => {
                                                    window.open(`/group/${id}/profile`, '_self');
                                                }, 500);
                                            }}
                                        />
                                    </ButtonContainer>
                                    <ButtonContainer backgroundColor='red'>
                                        <input 
                                            type='button'
                                            value="DELETE"
                                        />
                                    </ButtonContainer>
                                </GroupSearchListDetails>
                            </GroupSearchListItem>
                        )
                    })
                }
            </GroupSearchList>
        </GroupSearchContainer>
    );
};

export default GroupSearch;