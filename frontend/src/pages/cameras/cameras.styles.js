import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const CameraPageContainer = styled.div`
    padding: 1em;
`;

export const CameraInstance = styled.div`
    border: 1px solid black;
    background-color: ${colors.fadedBlue};
    border-radius: 0.5em;
    margin: 0.5em;
    padding: 1em;
`;

export const CameraDetails = styled.div`
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: ${colors.customWhite};

    width: 25%;

    display: flex;
    flex-display: column;

    span {
        padding: 0.5em;
    }
`;