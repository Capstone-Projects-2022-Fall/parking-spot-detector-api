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

export const RegisterFormTidbit = styled.div`
    font-size: small;
    font-color: ${colors.darkBlue};
    padding-bottom: 1em;
`;