import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const TextFieldContainer = styled.div`
    padding: 0.25em;
    
    input {
        padding: 0.5em;
        border: none;
        border-radius: 0.25em;
        border: 1px solid ${colors.darkPurple};
    }
`;