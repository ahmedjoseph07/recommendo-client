import React from "react";
import Trending from "../Trending/Trending";
import Typewriter from "typewriter-effect";
import { Link } from "react-router";

const Hero = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-12">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl text-primary font-bold mb-4">
                        Find the Best Recommendations for You
                    </h1>
                    <p className="text-secondary text-xl md:text-base max-w-2xl mx-auto">
                        From top gadgets to trusted services, get curated
                        recommendations tailored to your needs — all in one
                        place. Simplify your search with Recommendo.
                    </p>
                    <div className="py-4 font-bold text-accent text-xl">
                        <Typewriter
                            options={{
                                strings: [
                                    "Best Recommendations for You",
                                    "Trusted Brands and Services",
                                    "Simplify with Recommendo",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                    <Link to='/queries' className="btn btn-outline btn-primary px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300">
                        Start Exploring
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
