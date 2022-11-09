import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
    FramePageContainer,
    FramePageTitle,
    FrameList, 
    FrameItem,
    StatsContainer,
    FilterContainer,
    FilterMenu,
    FilterOptions,
    FramePictureStyle,
    FrameMetadata
} from './frames.styles';
import samplePicture from '../../assets/sample.jpg';
import { ButtonContainer } from '../../app.styles';
import * as colors from '../../constants/colors';

const CameraFrameHistoryPage = () => {
    const [frames, setFrames] = useState([]);
    const { id } = useParams();

    const LIMIT = 10;
    const MAX_PAGE = Math.floor(frames.length);
    const [numOfFrames, setNumOfFrames] = useState(0);

    const [filterSelection, setFilterSelection] = useState('');
    /*const [filterResults, setFilterResults] = useState({
    });*/
    const toggleFilter = (e) => {
        const text = e.target.className;
        setFilterSelection(text !== filterSelection ? text : '');
    }

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

    /* based on choice of filtering results */
    const filterContents = {
        /* 
            all results are in ascending order

            ::: date time :::
            -> search by exact date
            -> search by date range
            -> search by exact time
            -> search by time range
            -> for any results, sort descending
            
            ::: image size :::
            -> search by exact size
            -> search by range in size
            -> for any results, sort descending

            ::: processed :::
            ** by default, both raw and processed frames are shown **
            -> check to only show original
            -> check to only show processed

            ::: frame id :::
            -> search by exact ID
        */
        'dateTime': (
            <>
                <div>
                    <small>
                        <b>Date &emsp;</b>
                    </small>
                    <input
                        type='date'
                    />
                    <br/>
                    <small>
                        <b>Date range &emsp;</b>
                    </small>
                    <input 
                        type='date'
                    />
                    <input
                        type='date' 
                    />
                    <br/>
                    <small>
                        <b>Time &emsp;</b>
                    </small>
                    <input
                        type='time'
                    />
                    <br/>
                    <small>
                        <b>Time range &emsp;</b>
                    </small>
                    <input 
                        type='time'
                    />
                    <input
                        type='time' 
                    />
                    <br/>
                    <small>
                        <b>Sort descending &emsp;</b>
                    </small>
                    <input
                        type='checkbox' 
                    />
                </div>
            </>
        ),
        'imageSize': (
            <>
                <div>
                    <small>
                        <b>Specific size &emsp;</b>
                    </small>
                    <input
                        type='text'
                        placeholder='Enter size...' 
                    />
                    <br/>
                    <small>
                        <b>Range of size &emsp;</b>
                    </small>
                    <input
                        style={{ width: '25%' }}
                        type='text'
                        placeholder='Enter min. size...' 
                    />
                    <input
                        style={{ width: '25%' }}
                        type='text'
                        placeholder='Enter max. size...' 
                    />
                    <br/>
                    <small>
                        <b>Sort descending &emsp;</b>
                    </small>
                    <input
                        type='checkbox' 
                    />
                </div>
            </>
        ),
        'processed': (
            <> 
                <small>
                    <b>Only show original frames &emsp;</b>
                </small>
                <input
                    type='checkbox' 
                />
                <br/>
                <small>
                    <b>Only show processed frames &emsp;</b>
                </small>
                <input
                    type='checkbox' 
                />
            </>
        ),
        'frameId': (
            <>
                <small>
                    <b>Find by frame ID &emsp;</b>
                </small>
                <input
                    placeholder="Enter frame ID... " 
                    type='text'
                />
            </>
        )
    }

    const FilterView = () => {
        return (
            <FilterContainer>
                <div>
                    <span style={{ margin: '1em', fontWeight: 'bold' }}>Sort/filter by</span>
                    <FilterMenu>
                        <span className="dateTime" onClick={toggleFilter}>
                            Date/time
                        </span>
                        <span className="imageSize" onClick={toggleFilter}>
                            Image Size
                        </span>
                        <span className='processed' onClick={toggleFilter}>
                            Processed
                        </span>
                        <span className="frameId" onClick={toggleFilter}>
                            Frame ID
                        </span>
                    </FilterMenu>
                </div>
                {
                    filterSelection.length > 0 &&
                    <FilterOptions>
                        <div>
                            {
                                filterContents[filterSelection]
                            }
                        </div>
                        <ButtonContainer 
                            backgroundColor={colors.green}
                        >
                            <input
                                type='button'
                                value='SEARCH'
                                onClick={() => console.log(':-)')} 
                            />
                        </ButtonContainer>
                    </FilterOptions>
                }
            </FilterContainer>
        );
    }

    return (
        <FramePageContainer>
            <FramePageTitle>
                Camera ID: {id}
            </FramePageTitle>
            <StatisticsView />
            <FilterView />
            <div style={{ marginLeft: '0.5em' }}>
                {
                    /* go back button */
                    numOfFrames >= 10 &&
                    <input
                        type='button'
                        value="<<<"
                        onClick={() => {
                            setNumOfFrames(numOfFrames - LIMIT);
                        }} 
                    />
                }
                <span style={{ padding: '0 1em' }}>
                    {/*  page number display and text to redirect to a page */}
                    Page: { 
                        `${Math.floor(numOfFrames / 10) + 1} / ` 
                    }
                    <input 
                        type='text'
                        style={{ width: '16px', marginLeft: '1em' }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                let text = e.target.value;
                                if (text > MAX_PAGE) text = MAX_PAGE;
                                else if (text < 1) text = 1;
                                setNumOfFrames(
                                    (text.length > 0) ? (
                                        Math.floor((text-1) * 10)
                                    ) : numOfFrames
                                );
                                e.target.value = '';
                            }
                        }}
                    />
                </span>
                {
                    /* next page button */
                    numOfFrames <= MAX_PAGE &&
                    <input
                        type='button'
                        value='>>>'
                        onClick={() => {
                            setNumOfFrames(numOfFrames + LIMIT);
                        }} 
                    />
                }
            </div>
            <FrameList>
                {
                    frames.slice(numOfFrames, numOfFrames + LIMIT).map((item, index) => {
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
                                    <small style={{ fontSize: '10px', marginTop: '1em' }}>
                                        Frame: {index + numOfFrames + 1}
                                    </small>
                                </FrameMetadata>
                            </FrameItem>
                        );
                    })
                }
            </FrameList>
            <br/><br/>
        </FramePageContainer>
    );
};

export default CameraFrameHistoryPage;