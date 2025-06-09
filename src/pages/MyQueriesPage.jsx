import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const queries = [
    {
        _id: "1",
        title: "Best phone under 30K?",
        description:
            "Looking for a smartphone with good camera and battery life under 30,000 BDT.",
        category: "Gadgets",
        timestamp: "2025-06-08T12:00:00Z",
    },
    {
        _id: "2",
        title: "Reliable home internet?",
        description:
            "Which ISP provides the best speed and uptime in Chittagong?",
        category: "Services",
        timestamp: "2025-06-07T15:30:00Z",
    },
    {
        _id: "3",
        title: "Pet-friendly cafes in Dhaka?",
        description:
            "Are there any good cafes in Dhaka where pets are allowed?",
        category: "Lifestyle",
        timestamp: "2025-06-09T08:15:00Z",
    },
    {
        _id: "4",
        title: "Pet-friendly cafes in Dhaka?",
        description:
            "Are there any good cafes in Dhaka where pets are allowed?",
        category: "Lifestyle",
        timestamp: "2025-06-09T08:15:00Z",
    },
    {
        _id: "5",
        title: "Pet-friendly cafes in Dhaka?",
        description:
            "Are there any good cafes in Dhaka where pets are allowed?",
        category: "Lifestyle",
        timestamp: "2025-06-09T08:15:00Z",
    },
];

const MyQueriesPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <div className="bg-base-200 p-6 rounded-xl text-center mb-8 shadow">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    My Queries
                </h2>
                <p className="py-4">
                    Easily manage all your posted queries in one place. From
                    tech recommendations to lifestyle suggestions, view, update,
                    or remove your questions anytime. Stay in control and get
                    personalized help tailored to your needs.
                </p>
                <Link to='/add-query' className="btn btn-primary btn-outline btn-sm">
                    Add New Query
                </Link>
            </div>

            {queries.length === 0 ? (
                <div className="text-center space-y-4 mt-10">
                    <p className="text-lg">
                        You haven't added any queries yet.
                    </p>
                    <button className="btn btn-outline btn-sm btn-primary">
                        Add Your First Query
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {queries.map((q, index) => (
                        <motion.div
                            key={q._id}
                            className="bg-base-100 border rounded-xl p-5 border-base-300 shadow hover:shadow-2xl duration-400 hover:scale-105 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}>
                            <h3 className="text-lg text-primary font-bold mb-1">
                                {q.title}
                            </h3>
                            <p className="text-sm mb-2">
                                {q.description}
                            </p>
                            <p className="text-xs text-primary mb-4">
                                Category:{" "}
                                <span className="font-semibold">
                                    {q.category}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <button className="btn btn-sm btn-secondary btn-outline">
                                    View Details
                                </button>
                                <button className="btn btn-sm btn-outline btn-accent">
                                    Update
                                </button>
                                <button className="btn btn-sm btn-outline btn-error">
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyQueriesPage;
