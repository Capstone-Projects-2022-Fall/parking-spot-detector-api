import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const GroupProfileMain = styled.div`
    border: 0.25em solid ${props => props.privacy ? "green" : "pink"};
    border-radius: 0.5em;
    padding: 1em;
`;

export const GroupTitle = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;

    span {
        padding: 0.25em;
        font-size: 30px;
    }

    small {
        text-decoration: underline;
        padding: 0 0.5em;
        width: fit-content;
        
        &:hover {
            cursor: pointer;
            color: white;
            background-color: gray;
        }
    }
`;

export const GroupContainer = styled.div`
    padding: 1em;
    border: 3px solid purple;
    border-radius: 0.5em;
    background-color: ${colors.fadedPurple};    
`;

export const GroupSubcontainer = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    justify-content: center;
`;

export const GroupAdminContainer = styled.div`
    b {
        padding: 1em;
    }
    padding: 0.5em;

    span {
        color: blue;
        font-weight: bold;

        &:hover {
            color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    border-radius: 0.25em;
    margin: 0.5em;
    border: 2px solid ${colors.veryDarkBlue};
    background-color: ${colors.fadedBlue};

    display: flex;
    flex-direction: column;

    min-height: 1em;
`;

export const GroupUserContainer = styled.div`
    b {
        padding: 1em;
    }
    padding: 0.5em;

    span {
        color: blue;
        font-weight: bold;

        &:hover {
            color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    border-radius: 0.25em;
    margin: 0.5em;
    border: 2px solid ${colors.veryDarkBlue};
    background-color: ${colors.fadedBlue};

    display: flex;
    flex-direction: column;

    min-height: 1em;
`;

export const GroupAdminDisplay = styled.div`
    
`;

export const GroupUserDisplay = styled.div`

`;

export const GroupMessage = styled.div`

`;

export const GroupMsgContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    background-color: white;
    border: 2px solid black;
    border-radius: 0.25em;

    width: fit-content;
    user-select: none;
    padding: 1em;
    margin: 0.5em;

    img {
        height: 25px;
        width: 25px;
        padding: 0 0.125em;
    }

    span {
        padding-top: 0.125em;
        padding-left: 1em;
    }

    font-style: italic;
    font-weight: 700;
`;

export const GroupIconContainer = styled.div`
    img {
        height: 50px;
        padding: 0.0625em 0.25em;
    }

    background-color: ${props => props.private ? "pink" : "lightgreen"};
    border: 2px solid black;
    border-radius: 10em;
    margin: 1em;
    height: fit-content;
    width: fit-content;
`;

// search styles

export const GroupSearchContainer = styled.div`
    padding: 1em;
`;

export const GroupSearchTitle = styled.div`
    font-weight: bold;
    padding: 1em;
`;

export const GroupSearchText = styled.div`
    font-weight: bold;
    font-size: 24px;
`;

export const GroupSearchList = styled.div`
    padding: 1em;
`;

export const GroupSearchListItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 0.5em;
    background-color: ${colors.fadedBlue};
    border-radius: 1em;
    border: 2px solid ${colors.darkBlue};
    margin: 1em 0;
`;

export const GroupSearchListDetails = styled.div`
    font-weight: bold;

    display: flex;
    flex-direction: row;
    
    input {
        margin: 0 1em;
    }
`;