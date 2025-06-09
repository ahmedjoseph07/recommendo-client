import React from "react";

const sampleQueries = [
    {
        title: "Best phone under 30K?",
        description:
            "Looking for a smartphone with good camera and battery life under 30,000 BDT.",
        category: "Gadgets",
    },
    {
        title: "Reliable home internet?",
        description:
            "Which ISP provides the best speed and uptime in Chittagong?",
        category: "Services",
    },
    {
        title: "Budget smartwatch?",
        description:
            "What are the best budget-friendly smartwatches for fitness tracking?",
        category: "Wearables",
    },
    {
        title: "Affordable laptops for students?",
        description:
            "I'm a student. Need a laptop for coding and browsing under 50K.",
        category: "Gadgets",
    },
    {
        title: "Noise-cancelling headphones?",
        description:
            "Which headphones offer the best noise cancellation under 15K?",
        category: "Audio",
    },
    {
        title: "Pet-friendly cafes in Dhaka?",
        description:
            "Are there any good cafes in Dhaka where pets are allowed?",
        category: "Lifestyle",
    },
    {
        title: "Best DSLR for beginners?",
        description:
            "Looking to get into photography. Need a good entry-level DSLR under 60K.",
        category: "Gadgets",
    },
    {
        title: "Meal delivery in Mymensingh?",
        description:
            "Any reliable and affordable meal delivery services in Mymensingh?",
        category: "Services",
    },
    {
        title: "Online learning platforms?",
        description:
            "Which platforms offer the best value for tech skill development?",
        category: "Education",
    },
    {
        title: "Bluetooth speakers under 5K?",
        description:
            "Suggest portable Bluetooth speakers with great sound quality below 5,000 BDT.",
        category: "Audio",
    },
];

const Queries = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                All Queries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleQueries.map((query, index) => (
                    <div
                        key={index}
                        className="border border-base-300 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-accent">
                                {query.category}
                            </span>
                            <span className="text-xs text-neutral opacity-70">
                                #{index + 1}
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
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

export default Queries;
