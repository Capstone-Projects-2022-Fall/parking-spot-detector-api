import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const ProfileMain = styled.div`
    padding: 1em;
`;

export const ProfileTitle = styled.div`
    font-weight: bold;
    color: ${colors.customBlack};
    border-bottom: 2px solid ${colors.customBlack};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
        font-size: 32px;
    }

    small {
        font-size: 16px;
        margin: 1em 1em 0 0;
    }
`;

export const ProfileContainer = styled.div`
    border: 1px solid ${colors.customBlack};
    margin: 1em;
    border-radius: 0.5em;
    padding: 1em;
`;

export const ProfileSubcontainer = styled.div`
    margin: 0.5em;
    background-color: ${colors.fadedBlue};
    border-radius: 0.25em;
    padding: 0.5em;
    user-select: none;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SymbolContainer = styled.div`
    img {
        padding: 0.25em;
        height: 30px;
        width: auto;
    }
`;

// search 

export const ProfileSearchMain = styled.div`
    padding: 1em;
`;

export const ProfileSearchList = styled.div`
    padding: 1em;
`;

export const ProfileSearchListItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    span {
        user-select: none;
    }

    padding: 0.5em;
    background-color: ${colors.fadedBlue};
    border-radius: 1em;
    border: 2px solid ${colors.darkBlue};
    margin: 1em 0;
`;

export const ProfileSearchListDetails = styled.div`
    font-weight: bold;

    display: flex;
    flex-direction: row;

    input {
        margin: 0 1em;
    }
`;

export const ProfileSearchTitle = styled.div`
    font-weight: bold;
    padding: 1em;
`;

export const ProfileSearchText = styled.div`
    font-weight: bold;
    font-size: 24px;
`;