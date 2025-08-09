import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router";

const HowItWorksPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-12">
            <div className="flex flex-col items-center text-center gap-8">
                {/* Title */}
                <div>
                    <h1 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                        How Recommendo Works
                    </h1>
                    <div className="py-2 font-bold text-accent text-lg md:text-xl">
                        <Typewriter
                            options={{
                                strings: [
                                    "Post Queries Easily",
                                    "Get Trusted Recommendations",
                                    "Engage with the Community",
                                    "Build Your Reputation",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-8 max-w-3xl text-neutral text-sm md:text-base">
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-primary">
                            1. Post a Query
                        </h2>
                        <p>
                            Have a question or need suggestions? Post a query
                            with details, categories, and any supporting links
                            or images.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-primary">
                            2. Get Recommendations
                        </h2>
                        <p>
                            Our community responds with recommendations. The
                            more details you give, the better suggestions you'll
                            receive.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-primary">
                            3. Engage and Recommend
                        </h2>
                        <p>
                            Recommend helpful answers, comment for clarification,
                            and share your own experiences to help others.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-primary">
                            4. Build Your Profile
                        </h2>
                        <p>
                            As you participate, you build credibility and gain
                            access to more features.
                        </p>
                    </div>
                </div>

                <Link
                    to="/queries"
                    className="btn btn-outline btn-primary px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300">
                    Start Exploring
                </Link>
            </div>
        </div>
    );
};

export default HowItWorksPage;
