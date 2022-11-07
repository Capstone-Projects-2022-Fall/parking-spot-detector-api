import React from 'react';
import { Title, Slideshow } from './main.styles';
import { FlexRow } from '../../app.styles';
import SignIn from '../../components/signin';
import sampleImg from '../../assets/sample.jpg';

const MainPage = () => {
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
                <SignIn />
            </FlexRow>
        </>
    );
}

export default MainPage;