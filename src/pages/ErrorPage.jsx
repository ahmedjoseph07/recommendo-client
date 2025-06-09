import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-20 flex flex-col items-center text-center">
            <motion.h1
                className="text-6xl md:text-8xl font-bold text-primary mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                404
            </motion.h1>

            <motion.h2
                className="text-2xl md:text-3xl font-semibold text-neutral mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                Page Not Found
            </motion.h2>

            <motion.p
                className="text-sm md:text-base text-gray-500 mb-6 max-w-md"
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
                    className="btn btn-outline btn-primary font-semibold px-6">
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default ErrorPage;
