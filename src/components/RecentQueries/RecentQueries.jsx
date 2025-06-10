import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "../Loading/Loading";

const queries = [
    {
        title: "Best laptops under 70,000 BDT",
        description:
            "Find out which laptops offer the best value for your budget with updated specs and performance reviews.",
    },
    {
        title: "Top Restaurants in Dhaka",
        description:
            "Curated list of the best places to eat, rated by the local food community.",
    },
    {
        title: "Affordable smartphones 2025",
        description:
            "Latest phones offering powerful features at a budget-friendly price.",
    },
    {
        title: "Reliable courier services in Bangladesh",
        description:
            "Compare services based on delivery speed, coverage, and pricing.",
    },
    {
        title: "How to prepare for BCS exam",
        description:
            "Resources and timelines for beginners aiming to clear the BCS exam.",
    },
    {
        title: "Best banks for student accounts",
        description:
            "Explore student-friendly bank accounts with minimal fees and good support.",
    },
];

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`${import.meta.env.VITE_SERVER_URL}/api/queries`)
            .then((res) => {
                setQueries(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch queries");
                console.error(err);
            });
    }, []);

    const sortedQueries = [...queries]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Recent Queries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedQueries.map((query, index) => (
                    <motion.div
                        key={index}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="cursor-pointer group p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-400 border border-base-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                {query.queryTitle}
                            </h3>
                            <p className="text-sm text-neutral">{new Date(query.createdAt).toLocaleDateString()}</p>
                        </div>

                        <p className="text-sm text-neutral">
                            Product : {query.productName}
                        </p>
                        <p className="text-sm text-neutral">
                            Brand : {query.productBrand}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecentQueries;
