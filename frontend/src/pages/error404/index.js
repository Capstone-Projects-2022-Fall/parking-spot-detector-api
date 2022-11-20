import React from 'react';
import { ButtonContainer } from '../../app.styles';
import { 
    Error404Main, 
    Custom404 
} from './error404.styles';

const Error404Page = () => {
    return (
        <Error404Main>
            <b>Error 404: Not Found</b>
            <ButtonContainer>
                <Custom404>
                    <input
                        type='button'
                        value="Go Home"
                        onClick={() => window.open('/', '_self')} 
                    />
                </Custom404>
            </ButtonContainer>
        </Error404Main>
    );
}

export default Error404Page;
