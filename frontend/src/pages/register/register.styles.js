import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const RegisterMain = styled.div`
    border-radius: 1em;
    padding: 1em;
    background-color: ${colors.fadedPurple};
`;

export const RegisterHeading = styled.div`
    font-weight: bold;
    font-size: large;
`;

export const RegisterText = styled.div`
    padding: 1em;
    background-color: ${colors.customWhite};
    border-radius: 0.5em;
`;

export const RegisterFormTitle = styled.div`
    font-weight: bold;
    font-size: large;
    padding: 0.5em;
    padding-bottom: 1em;
`;

export const RegisterFormInstructions = styled.div`
    padding: 1em;
    background-color: ${colors.fadedBlue};
    margin: 0.5em;
    border-radius: 1em;
    left: 0;

    max-width: 511px;

    display: flex;
    flex-display: column;

    small {
        padding: 0.5em;
    }
`;

export const CameraFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 1em 0;

    b { padding: 0.25em 0; }

    small { padding: 0.5em 0; }
`;