import React from 'react';
import Slider from '../components/SlideShow/SlideShow';
import SlideShow from '../components/SlideShow/SlideShow';
import RecentQueries from '../components/RecentQueries/RecentQueries';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';

const HomePage = () => {

    return (
        <div>
            <SlideShow/>
            <Hero/>
            <RecentQueries/>
            <Testimonials/>
        </div>
    );
};

export default HomePage;