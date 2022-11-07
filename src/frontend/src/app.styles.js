import styled from 'styled-components';
import * as colors from './constants/colors';

export const Container = styled.div`
    padding: 1em;
    border-radius: 0.5em;

    background-color: ${colors.customWhite};
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    
`;