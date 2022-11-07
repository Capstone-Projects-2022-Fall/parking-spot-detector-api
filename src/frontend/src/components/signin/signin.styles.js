import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const SignInContainer = styled.div`
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
    border: 2px solid ${colors.darkPurple};
    background-color: ${colors.customWhite};
    width: fit-content;
`;

export const SignInButtonStyles = styled.div`
    input {
        border: none;
        padding: 0.5em;
        background-color: ${colors.green};
        border-radius: 0.5em;
        font-size: 16px;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 5px ${colors.customBlack};
            transition-duration: 0.5s;
        }
    }
`;

export const SignInText = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 0.5em;
`;