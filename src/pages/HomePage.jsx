import React from 'react';
import Slider from '../components/SlideShow/SlideShow';
import SlideShow from '../components/SlideShow/SlideShow';
import RecentQueries from '../components/RecentQueries/RecentQueries';

const HomePage = () => {
    return (
        <div>
            <SlideShow/>
            <RecentQueries/>
        </div>
    );
};

export default HomePage;