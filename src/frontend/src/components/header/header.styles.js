import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const HeaderMain = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${colors.fadedBlue};

    padding: 0.5em 1em;

    .logo {
        width: auto;
        height: 72px;
        border-radius: 12px;
    }
`;

export const HeaderTitle = styled.div`
    color: ${colors.customBlack};
    padding: 1em;
    font-weight: bold;
`;

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;

    padding: 0.25em;
    border-radius: 0.25em;
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
        padding: 0.5em;
        margin: 0.25em;

        &:hover {
            cursor: pointer;
            background-color: ${colors.fadedBlue};
            color: ${colors.customWhite};
            border: 2px solid ${colors.customWhite};
            transition-duration: 0.5s;
        }
    }
`;