import React from "react";

const About = () => {
    return (
        <div className="w-10/12 md:w-8/12 mx-auto mt-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6">
                About Recommendo
            </h2>
            <p className="text-base leading-relaxed mb-4">
                Recommendo is a smart recommendation platform built to help
                users discover content they love — faster and smarter. Whether
                it's movies, books, courses, or products, Recommendo uses
                data-driven insights and modern technologies to bring
                personalized suggestions to your fingertips.
            </p>
            <p className="text-base leading-relaxed mb-4">
                This project was crafted with care and dedication by{" "}
                <span className="text-secondary font-medium">Joseph Ahmed</span>
                , a student of CUET, who believes in building impactful tools
                for real-world problems. From intuitive design to
                performance-focused code, every detail was chosen to enhance
                your experience.
            </p>
            <p className="text-base leading-relaxed">
                Made with ❤️ by JOSEPH AHMED.
            </p>
        </div>
    );
};

export default About;
