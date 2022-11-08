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

    &:hover {
        background-color: ${colors.green};
        transition-duration: 0.5s;
    }
`;