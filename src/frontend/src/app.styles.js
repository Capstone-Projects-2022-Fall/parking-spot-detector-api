import styled from 'styled-components';
import * as colors from './constants/colors';

export const Container = styled.div`
    padding: 1em;

    background-color: ${colors.customWhite};
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-around;

    height: ${props => props.height ? props.height : 'default'};
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row; 
    
    justify-content: space-around;

    width: ${props => props.width ? props.width : 'default'};
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

export const ButtonContainer = styled.div`
    input {
        border: none;
        padding: 1em;
        margin: 1em 0;
        border-radius: 1em;
        background-color: ${
            props => props.backgroundColor ? props.backgroundColor : colors.darkBlue
        };
        color: ${colors.customWhite};
        border: 2px solid ${
            props => props.backgroundColor ? props.backgroundColor : colors.darkBlue
        };

        &:hover {
            box-shadow: 0 0 5px ${colors.customBlack};
            cursor: pointer;
        }
    }
`;