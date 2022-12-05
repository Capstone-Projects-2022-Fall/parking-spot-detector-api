import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const SettingsContainer = styled.div`
    padding: 1em;
`;

export const SettingsTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 1em;
`;

export const SettingsMenuContainer = styled.div`
    border-right: 3px solid ${colors.customBlack};

    display: flex;
    flex-direction: column;

    padding: 0 0.5em;
`;

export const SettingsContentContainer = styled.div`
    background-color: ${colors.customWhite};
    padding: 1em;
    margin: 0 0.5em;
    border: ${props => props.show ? `3px solid ${colors.fadedBlue}` : 'none'};

    min-width: 480px;
    width: fit-content;

    span {
        font-weight: bold;
        font-size: large;
        text-decoration: underline;
    }
`;

export const SettingsMenuButton = styled.div`
    input {
        padding: 0.5em;
        border: 2px solid ${colors.customBlack};
        background-color: ${colors.fadedPurple}
        color: ${colors.darkPurple};
        font-weight: bold;
        width: 16em;

        &:hover {
            background-color: ${colors.fadedBlue};
            cursor: pointer;
            transition-duration: 0.25s;
        }
    }
`;

export const SettingsContentTitle = styled.div`
    margin-left: 0.5em;
    font-weight: bold;
`;

export const SettingsContentSubtitle = styled.div`
    font-size: 12px;
    margin-left: 0.5em;
    margin-bottom: 1em;
`;

export const SettingItem = styled.div`
    border-radius: 1em;
    background-color: rgba(127, 146, 244, 25%);
    padding: 1em;
    margin: 1em 0.5em;
    user-select: none;
`;

export const FinalStepDelete = styled.div`
    border-radius: 0.5em;
    background-color: pink;

    padding: 1em;
`;
