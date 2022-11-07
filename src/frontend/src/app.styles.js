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

    justify-content: space-around;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row; 
    
    justify-content: space-around;
`;

export const QRCodeContainer = styled.div`
    background-color: ${colors.darkBlue};
    padding: 0.5em;
    width: fit-content;
    border-radius: 0.5em;

    img {
        height: 250px;
        width: fit-content;
    }
`;