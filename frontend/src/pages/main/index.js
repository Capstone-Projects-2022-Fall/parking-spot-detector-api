import React from 'react';
import { Title, Slideshow } from './main.styles';
import { FlexRow } from '../../app.styles';

import SignIn from '../../components/signin';
import Catalog from '../../components/catalog';
import sampleImg from '../../assets/sample.jpg';

const MainPage = ({ loggedIn, handleLogin }) => {
    return (
        <>
            <Title>Welcome to Parking Spot Detector!</Title>
            <FlexRow>
                <Slideshow>
                    <img
                        src={sampleImg}
                        alt="Cars" 
                    />
                </Slideshow>
                {
                    loggedIn ? (
                        <Catalog />
                    ) : (
                        <SignIn
                            loggedIn={loggedIn}
                            handleLogin={handleLogin} 
                        />
                    )
                }
            </FlexRow>
        </>
    );
}

export default MainPage;