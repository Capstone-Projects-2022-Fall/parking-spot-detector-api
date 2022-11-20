import React from 'react';
import { Title, Slideshow } from './main.styles';
import { FlexRow } from '../../app.styles';

import SignIn from '../../components/signin';
import Catalog from '../../components/catalog';
import sampleImg from '../../assets/sample.jpg';

const MainPage = () => {
    return (
        <>
            <Title>Welcome to Parking Spot Detector!</Title>
            <FlexRow spaced>
                <Slideshow>
                    <img src={sampleImg} alt="Cars" />
                </Slideshow>
                {
                    <SignIn /> //setToken ? <Catalog /> : <SignIn setToken={setToken} />
                }
            </FlexRow>
        </>
    );
}

export default MainPage;