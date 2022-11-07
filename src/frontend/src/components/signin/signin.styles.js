import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const SignInContainer = styled.div`
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
    border: 2px solid ${colors.darkPurple};
    background-color: ${colors.customWhite};
    width: 195px;
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

export const TogglePiece = styled.div`
    height: 20px;
    border: 1px solid black;
    padding: 0.75em;
    margin: 1em;
    width: fit-content;
    user-select: none;

    &.phone {
        background-color: ${props => props.selected ? colors.normalPurple : colors.customWhite};
        color: ${props => props.selected ? colors.customWhite : colors.customBlack};
        border-top-left-radius: 1em;
        border-bottom-left-radius: 1em;
        margin-left: 1.25em;

        &:hover {
            cursor: pointer;
            transition-duration: 0.5s;
            box-shadow: 0 0 5px ${colors.customBlack};
        }
    }

    &.email {
        background-color: ${props => props.selected ? colors.normalPurple : colors.customWhite};
        color: ${props => props.selected ? colors.customWhite : colors.customBlack};
        border-bottom-right-radius: 1em;
        border-top-right-radius: 1em;
        margin-left: -1.25em;

        &:hover {
            cursor: pointer;
            transition-duration: 0.5s;
            box-shadow: 0 0 5px ${colors.customBlack};
        }
    }
`;