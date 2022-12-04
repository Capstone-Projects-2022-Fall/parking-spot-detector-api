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
                        return (
                            <GroupSearchListItem key={index}>
                                <span>Group ID: {newID}</span>
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