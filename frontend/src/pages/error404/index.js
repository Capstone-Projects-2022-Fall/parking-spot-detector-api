import React from 'react';
import { ButtonContainer } from '../../app.styles';
import { Error404Main } from './error404.styles';

import * as colors from '../../constants/colors';

const Error404Page = () => {
    return (
        <Error404Main>
            <b>Error 404: Not Found</b>
            <ButtonContainer>
                <div style={{ 
                    backgroundColor: colors.fadedBlue,
                    borderRadius: '0.5em',
                    margin: '0.5em auto',
                    padding: '0 0.25em',
                    width: 'fit-content'
                }}>
                    <input
                        type='button'
                        value="Go Home"
                        onClick={() => window.open('/', '_self')} 
                    />
                </div>
            </ButtonContainer>
        </Error404Main>
    );
}

export default Error404Page;
