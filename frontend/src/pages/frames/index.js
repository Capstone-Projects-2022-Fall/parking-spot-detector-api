import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
    FramePageContainer,
    FramePageTitle,
    FrameList, 
    FrameItem,
    StatsContainer,
    FramePictureStyle,
    FrameMetadata
} from './frames.styles';

import samplePicture from '../../assets/sample.jpg';

const CameraFrameHistoryPage = () => {
    const [frames, setFrames] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getFrames = async () => {
            var data = await axios.get('http://parkingspotdetector-env.eba-mmwgffbe.us-east-1.elasticbeanstalk.com/frames/');
            var frameData = data.data;
            frameData = frameData.filter((f) => f['camera_id'] === id);
            setFrames(frameData);
        };
        getFrames();
    }, [id]);

    const StatisticsView = () => {
        return (
            <StatsContainer>
                Test statistics view
            </StatsContainer>
        );
    }

    console.log(frames.length);

    return (
        <FramePageContainer>
            <FramePageTitle>
                Camera ID: {id}
            </FramePageTitle>
            <StatisticsView />
            <FrameList>
                {
                    frames.map((item, index) => {
                        const { _id, bytes, datetime } = item;
                        return (
                            <FrameItem key={index}>
                                <FramePictureStyle>
                                    <img src={samplePicture} alt='' />
                                </FramePictureStyle>
                                <FrameMetadata>
                                    <span>Frame id: {_id}</span>
                                    <span>Image size: {Number(bytes) / 1000} KB</span>
                                    <span>Date/time taken: {datetime}</span>
                                </FrameMetadata>
                            </FrameItem>
                        );
                    })
                }
            </FrameList>
        </FramePageContainer>
    );
};

export default CameraFrameHistoryPage;