import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const FooterMain = styled.div`
    width: 100%;
    height: 6vh;

    position: fixed;
    bottom: 0;

    background-color: ${colors.darkBlue};
    padding: 0.5em 1em;
    color: ${colors.customWhite};

    display: ${props => props.show ? 'default' : 'none'};
`;