import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const CatalogMain = styled.div`
    border: 2px solid ${colors.darkPurple};
    background-color: ${colors.customWhite};
    width: 195px;
    border-radius: 1em;
    padding: 1em;
    margin: 1em;
`;

export const CatalogButton = styled.div`
    input {
        border: none;
        background-color: ${colors.green};
        color: ${colors.customBlack};
        border-radius: 0.5em;
        padding: 1em;
        margin: 0.5em;

        font-weight: bold;

        &:hover {
            box-shadow: 0 0 5px ${colors.customBlack};
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }
`;