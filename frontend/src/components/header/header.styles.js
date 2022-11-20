import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const HeaderMain = styled.div`
    width: 100%;
    height: ${props => props.setToken ? '15vh' : '10vh'};
    background-color: ${colors.fadedBlue};

    padding: 0.5em 1em;

    .logo {
        width: auto;
        height: 72px;
        border-radius: 12px;

        &:hover {
            cursor: pointer;
        }
    }

    /* testing for mobile responsive design */
    @media screen and (max-width: 320px) {
        background-color: red;
    }
`;

export const HeaderTitle = styled.div`
    color: ${colors.customBlack};
    padding: 1em;
    font-weight: bold;
    font-size: 20px;

    user-select: none;
`;

export const HeaderInputStyle = styled.div`
    input {
        width: 6em;

        font-weight: bold;
        font-size: small;

        border: 2px solid ${colors.fadedBlue};
        color: black;
        background-color: ${colors.customWhite};
        color: ${colors.veryDarkBlue};
        border-radius: 0.25em;
        padding: 0.75em 1em;
        margin: 1em;

        &:hover {
            cursor: pointer;
            background-color: ${colors.fadedBlue};
            color: ${colors.customWhite};
            border: 2px solid ${colors.customWhite};
            transition-duration: 0.5s;
        }
    }
`;

export const LogInHeader = styled.div`
    height: 4vh;
    width: auto;
    padding: 0.25em 0.75em;
    margin-left: -1em;
    background-color: ${colors.darkBlue};
    border: 2px solid ${colors.customBlack};

    color: ${colors.customWhite};
`;