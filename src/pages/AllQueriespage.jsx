import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const sampleQueries = [
    {
        _id: "1",
        title: "Best phone under 30K?",
        description:
            "Looking for a smartphone with good camera and battery life under 30,000 BDT.",
        category: "Gadgets",
        recommendationCount: 12,
        timestamp: "2025-06-08T12:00:00Z",
    },
    {
        _id: "2",
        title: "Reliable home internet?",
        description:
            "Which ISP provides the best speed and uptime in Chittagong?",
        category: "Services",
        recommendationCount: 7,
        timestamp: "2025-06-07T15:30:00Z",
    },
    {
        _id: "3",
        title: "Pet-friendly cafes in Dhaka?",
        description:
            "Are there any good cafes in Dhaka where pets are allowed?",
        category: "Lifestyle",
        recommendationCount: 4,
        timestamp: "2025-06-09T08:15:00Z",
    },
];


const AllQueriesPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                All Queries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleQueries.map((query, index) => (
                    <motion.div
                        key={query._id}
                        className="border border-base-300 rounded-xl p-5 shadow-md hover:shadow-2xl hover:scale-105 duration-400 transition-all group cursor-pointer bg-base-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-accent">
                                {query.category}
                            </span>
                            <span className="text-xs text-neutral opacity-70">
                                {new Date(query.timestamp).toLocaleDateString()}
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {query.title}
                        </h3>

                        <p className="text-sm text-neutral mb-4">
                            {query.description}
                        </p>

                        <div className="flex justify-between items-center">
                            <span className="text-lg text-secondary font-medium">
                                {query.recommendationCount}👍Recommendations
                            </span>
                            <Link>
                                <button className="btn btn-sm btn-outline btn-primary">
                                👍Recommend
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllQueriesPage;
