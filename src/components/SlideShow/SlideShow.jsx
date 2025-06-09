import React from "react";
import { Slide } from "react-slideshow-image";
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
        <div className="w-11/12 md:w-10/12 mx-auto my-6 px-4 md:px-0 pb-4 rounded-xl overflow-hidden shadow-lg">
            <Slide
                autoplay
                infinite
                arrows={false}
                canSwipe
                defaultIndex={0}
                scale={1}
                duration={3000}
                transitionDuration={600}
                indicators={(index, active) => (
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md mx-1 cursor-pointer ${
                            active
                                ? "bg-primary text-neutral scale-110 shadow-lg"
                                : "bg-secondary text-neutral"
                        } transition-transform duration-300`}
                        title={`Go to slide ${index + 1}`}>
                        {index + 1}
                    </div>
                )}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="each-slide-effect h-[280px] sm:h-[350px] md:h-[400px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}>
                        <div className="w-full h-full bg-black/40 flex flex-col justify-center items-center px-4 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white bg-black/30 px-4 py-2 rounded-lg mb-2">
                                {captions[index]}
                            </h2>
                            <p className="text-sm sm:text-base text-white bg-black/20 px-3 py-2 rounded-md max-w-xl">
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
