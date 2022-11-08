import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const Title = styled.div`
    font-weight: bold;
    font-size: 32px;
    margin: 0 6.25%;

    user-select: none;
`;

export const Slideshow = styled.div`
    border-radius: 1em;
    height: 200px;
    width: 300px;
    margin: 1em 0;

    img {
        height: 200px;
        width: 300px;
        border-radius: 1em;
        border: 5px solid ${colors.darkPurple};
    }
`;