import React from "react";

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
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Recent Queries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {queries.map((query, index) => (
                    <div
                        key={index}
                        className="cursor-pointer p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-400 border border-base-300">
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                            {query.title}
                        </h3>
                        <p className="text-sm text-neutral">
                            {query.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentQueries;
