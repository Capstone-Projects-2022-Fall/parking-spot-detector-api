import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const FramePageContainer = styled.div`
    padding: 1em;
`;

export const FramePageTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

export const FrameList = styled.div`
    padding: 0.5em;
    margin: 0.5em;
    background-color: ${colors.customWhite};
    border: 1px solid ${colors.customBlack};
`;

export const FrameItem = styled.div`
    border: 1px solid ${colors.customBlack};
    background-color: ${colors.fadedPurple};

    display: flex;
    flex-direction: row;
`;

export const StatsContainer = styled.div`
    padding: 0.5em;
    margin: 0.5em;
    background-color: ${colors.fadedBlue};
`;

export const FramePictureStyle = styled.div`
    img {
        height: 100px;
        width: auto;
        border: 1px solid black;
    }
`;

export const FrameMetadata = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5em;

    span {
        padding: 0.25em;
        font-weight: bold;
        font-size: 12px;
    }
`;

export const FilterContainer = styled.div`
    background-color: ${colors.customWhite};
    border: 2px solild ${colors.darkBlue};

    border-radius: 1em;

    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FilterMenu = styled.div`
    span {
        border-bottom: 3px solid ${colors.customBlack};
        padding: 0 1em;
        margin: 0 1em;
        user-select: none;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
`;

export const FilterOptions = styled.div`
    margin-top: 1em;
    padding: 1em;
    border: 1px solid black;
    border-radius: 0.5em;

    max-height: 112px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;