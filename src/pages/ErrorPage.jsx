import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Lottie from "lottie-react";
import errorAnimation from "../assets/error-animation.json";

const ErrorPage = () => {
    return (
        <div className="w-11/12 md:w-8/12 mx-auto my-20 flex flex-col items-center text-center space-y-8 mt-20">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mx-auto">
                <Lottie animationData={errorAnimation} loop={true} />
            </motion.div>


            <motion.h2
                className="text-3xl md:text-4xl font-semibold text-neutral"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                Page Not Found
            </motion.h2>

            <motion.p
                className="text-base md:text-lg text-gray-500 max-w-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}>
                Sorry, the page you are looking for does not exist or has been
                moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}>
                <Link
                    to="/"
                    className="btn btn-outline btn-primary font-semibold px-8 py-3 text-lg">
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default ErrorPage;
