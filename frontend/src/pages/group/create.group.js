import React, { useEffect, useState } from 'react';
import {
    ButtonContainer,
    Container,
    FlexColumn,
    FlexRow,
    Separator
} from '../../app.styles';
import { 
    RegisterFormTitle, 
    RegisterFormInstructions,
    AvailableUserList,
    AvailableUserItem,
    RequestUserItem,
    RequestUserList
} from './groups.styles';

import axios from 'axios';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const CreateGroupPage = () => {
    //const registerURL = "http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/group";
    const createGroupURL = 'http://127.0.0.1:8080/group';

    const [complete, setComplete] = useState(false);
    const [newGroupId, setNewGroupId] = useState('');
    const [loadingId, setLoadingId] = useState('');

    const [availableUsers, setAvailableUsers] = useState([]);
    const [requestedUsers, setRequestedUsers] = useState([]);

    useEffect(() => {
        const fetchAvailableUsers = async () => {
            const data = await axios.get('http://127.0.0.1:8080/user');
            setAvailableUsers(data.data);
        };
        fetchAvailableUsers();
    }, []);

    const handleSelectedUsers = (username) => {
        if (requestedUsers.includes(username)) return;
        setRequestedUsers([...requestedUsers, username]);
    };

    const declineUser = (username) => {
        if (!requestedUsers.includes(username)) return;
        setRequestedUsers(requestedUsers.filter((object) => object !== username))
    }

    const newGroupSchema = Yup.object().shape({
        name: Yup.string().required("Group name required"),
        privacy: Yup.boolean(),
        home_addr: Yup.string(),
        status_update: Yup.string().max(128, "Status update cannot be more than 128 characters long."),
        users: Yup.array().of(Yup.string()),
        admins: Yup.array().of(Yup.string())
    });

    const formOptions = { resolver: yupResolver(newGroupSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    const postData = async (data) => {
        data['users'] = requestedUsers;
        data['admins'] = ["stephull"]; //test
        await axios({
            method: "POST",
            data: data,
            url: createGroupURL
        })
        .then((res) => {
            setNewGroupId(res['_id']);
            console.log(res);
        })
        .catch((err) => console.error(err));
    };

    const onSubmit = (data) => {
        const temp = data;
        postData(temp);
        setComplete(true);
    }

    return (
        <>
            <FlexColumn>
                <RegisterFormTitle>
                    Register for New Group
                </RegisterFormTitle>
                <RegisterFormInstructions>
                    <small>
                        Status update cannot be 128 characters long.
                    </small>
                    <Separator />
                    <small style={{ fontWeight: 'normal' }}>
                        Users can be added as admins after group is created.
                    </small>
                </RegisterFormInstructions>
            </FlexColumn>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type='text'
                    placeholder="Enter your group's name..."
                    name="name"
                    {...register('name')}
                />
                <div className='invalid-feedback'>
                    { errors.name?.message }
                </div>
                <Container style={{ width: 'fit-content' }}>
                    <FlexRow spaced>
                        <FlexColumn spaced style={{ paddingRight: "2em" }}>
                            <b>Will your group be private?</b>
                            <small>By default, your group is public.</small>
                        </FlexColumn>
                        <input 
                            type='checkbox'
                            name='privacy'
                            {...register('privacy')}
                        />
                    </FlexRow>
                </Container>
                <input 
                    type='text'
                    placeholder="Enter a street address..."
                    name='home_addr'
                    {...register('home_addr')}
                />
                <div className='invalid-feedback'>
                    { errors.home_addr?.message }
                </div>
                <input 
                    type='text'
                    placeholder="Add your new status update..."
                    name='status_update'
                    {...register('status_update')}
                />
                <div>
                    { errors.status_update?.message }
                </div>
                <br/>
                <span><b>Recommended Users: </b>    {`(Click to add user)`}</span>
                {
                    <AvailableUserList>
                        {
                            availableUsers.map((item, index) => {
                                const { username, email } = item;
                                return (
                                    <AvailableUserItem 
                                        key={index}
                                        onClick={() => handleSelectedUsers(username)}
                                    >
                                        <b>{username}</b>
                                        <span>{email}</span>
                                    </AvailableUserItem>
                                );
                            })
                        }
                    </AvailableUserList>
                }
                <span><b>Users Added to Group: </b>     {`(Click to remove user)`}</span>
                {
                    <RequestUserList>
                        {
                            requestedUsers.map((item, index) => {
                                return (
                                    <RequestUserItem 
                                        key={index}
                                        onClick={() => declineUser(item)}
                                    >
                                        <span>@{item}</span>
                                    </RequestUserItem>
                                );
                            })
                        }
                    </RequestUserList>
                }
                <br />
                <ButtonContainer backgroundColor="green">
                    <button disabled={isSubmitting} type='submit'>
                        Complete Group Creation
                    </button>
                </ButtonContainer>
                {
                    complete && 
                    <span>
                        Your group profile is ready!
                        <ButtonContainer>
                            <input 
                                type='button'
                                value="Go to Group Page"
                                onMouseOver={() => {
                                    setLoadingId(newGroupId);
                                }}
                                onClick={() => {
                                    setTimeout(() => {
                                        window.open(`/group/`, '_blank');
                                    }, 1000)
                                }}
                            />
                        </ButtonContainer>
                    </span>
                }
            </form>
        </>
    );
}

export default CreateGroupPage;