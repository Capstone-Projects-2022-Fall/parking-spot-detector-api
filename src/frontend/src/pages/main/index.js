import React from 'react';
import { Title, Slideshow } from './main.styles';

import sampleImg from '../../assets/sample.jpg';

const MainPage = () => {
    return (
        <>
            <Title>Welcome to Parking Spot Detector!</Title>
            <Slideshow>
                <img
                    src={sampleImg}
                    alt="Cars" 
                />
            </Slideshow>
        </>
    );
}

export default MainPage;