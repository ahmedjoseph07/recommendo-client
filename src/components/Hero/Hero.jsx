import React from "react";
import Trending from "../Trending/Trending";
import Typewriter from "typewriter-effect";
import { Link } from "react-router";

const Hero = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                <div className="flex-grow text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        Find the Best Recommendations for You
                    </h1>
                    <p className="text-neutral text-sm md:text-base max-w-xl">
                        From top gadgets to trusted services, get curated
                        recommendations tailored to your needs — all in one
                        place. Simplify your search with Recomendo.
                    </p>
                    <p className="py-4 font-bold text-accent text-xl">
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
                    </p>
                    <Link to='/queries' className="btn btn-outline btn-primary px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300">
                        Start Exploring
                    </Link>
                </div>
                <div>
                    <Trending />
                </div>
            </div>
        </div>
    );
};

export default Hero;
