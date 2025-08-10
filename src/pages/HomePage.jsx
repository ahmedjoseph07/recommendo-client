import React from 'react';
import SlideShow from '../components/SlideShow/SlideShow';
import RecentQueries from '../components/RecentQueries/RecentQueries';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';
import Trending from '../components/Trending/Trending';

const HomePage = () => {
    
    return (
        <div>
            <SlideShow/>
            <Hero/>
            <RecentQueries/>
            <Trending/>
            <Testimonials/>
        </div>
    );
};

export default HomePage;