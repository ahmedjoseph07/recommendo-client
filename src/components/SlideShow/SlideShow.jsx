import React from "react";
import { Zoom,Fade,Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import slide1 from "../../assets/slider1.jpg";
import slide2 from "../../assets/slider2.jpg";
import slide3 from "../../assets/slider3.jpg";

const images = [slide1, slide2, slide3];
const captions = [
    "Personalized Recommendations",
    "Your Queries, Answered",
    "Insights Tailored for You",
];
const descriptions = [
    "Discover tailored recommendations to help you make smarter choices effortlessly.",
    "Explore a world of queries and get personalized answers that matter to you.",
    "Connect with insights and suggestions designed specifically for your needs.",
];

const Slideshow = () => {
    return (
        <div className="w-full w-11/12 md:w-10/12 pb-4 my-6 rounded-xl overflow-hidden shadow-lg px-6 md:px-0 mx-auto">
            <Slide indicators={(index, active) => (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md mx-1 cursor-pointer ${active? "bg-primary text-neutral scale-110 shadow-lg": "bg-secondary text-neutral"} transition-transform duration-300`}
                        title={`Go to slide ${index + 1}`}>
                        {index + 1}
                    </div>
                )}
                scale={1.4}
                autoplay={true}
                duration={3500}
                canSwipe={true}
                transitionDuration={700}
                arrows={false}
                
                
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="each-slide-effect relative h-[400px] sm:h-[350px] xs:h-[280px] bg-center bg-cover"
                        style={{ backgroundImage: `url(${img})` }}>

                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                            <span className="text-2xl sm:text-3xl font-bold text-neutral-100 bg-opacity-70 rounded-lg px-4 py-2 mb-2">
                                {captions[index]}
                            </span>
                            <p className="max-w-xl text-neutral-100 bg-opacity-50 rounded-md px-3 py-2  text-sm sm:text-base">
                                {descriptions[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;
