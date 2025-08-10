import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
    {
        name: "Ayush Rahman",
        quote: "Recomendo helped me find the perfect phone in seconds!",
        role: "Product Enthusiast",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Tanvir Ahmed",
        quote: "Super accurate suggestions. I love this platform!",
        role: "Tech Blogger",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Rifat Hossain",
        quote: "Easy to use and very helpful for my daily choices.",
        role: "Freelancer",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        name: "Joseph Ahmed",
        quote: "Highly recommended for anyone looking for guidance.",
        role: "Marketing Specialist",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) =>
                (prev - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10 min-h-[320px] text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-extrabold mb-4">
                What Our Users Say
            </h2>
            <p className="text-secondary text-lg md:text-base max-w-2xl mx-auto mb-10">
                Hear directly from our community about their experiences with
                Recomendo. Real stories, real feedback.
            </p>

            <div
                className="relative w-full max-w-xl mx-auto overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="cursor-pointer group p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-400  flex flex-col items-center">
                        <img
                            src={testimonialsData[current].image}
                            alt={testimonialsData[current].name}
                            width={90}
                            height={90}
                            className="rounded-full mb-5 border-2 border-gray-300"
                        />
                        <h3 className="text-lg font-semibold group-hover:text-primary mb-1">
                            {testimonialsData[current].name}
                        </h3>
                        <p className="text-sm text-gray-600 italic mb-4 max-w-[400px]">
                            "{testimonialsData[current].quote}"
                        </p>
                        <p className="text-sm text-gray-500">
                            {testimonialsData[current].role}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="absolute border-l border-secondary cursor-pointer inset-y-0 left-0 flex items-center px-2  rounded-full shadow  transition">
                    &#8592;
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="absolute border-r border-secondary cursor-pointer inset-y-0 right-0 flex items-center px-2  rounded-full shadow  transition">
                    &#8594;
                </button>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
                {testimonialsData.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        role="button"
                        tabIndex={0}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                            current === index ? "bg-primary w-6" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
