import React from "react";

const MyRecommendationsPage = () => {
    const queries = [
        {
            id: "q1",
            title: "How to deploy MERN stack?",
            recommendationCount: 3,
        },
        {
            id: "q2",
            title: "Best practices for Redux Toolkit?",
            recommendationCount: 2,
        },
    ];

    const recommendations = [
        {
            id: "r1",
            queryId: "q1",
            note: "Essential for production",
            date: "2025-06-01",
        },
        {
            id: "r2",
            queryId: "q2",
            note: "Helps manage state",
            date: "2025-06-02",
        },
    ];

    const getQueryById = (id) => queries.find((q) => q.id === id);

    return (
        <div className="w-11/12 md:w-10/12 mx-auto px-6 py-10 ">
            <h2 className="text-2xl font-semibold mb-6">
                📝 My Recommendations
            </h2>

            <div className="overflow-x-auto">
                <table className="table w-full shadow-xl rounded-lg">
                    <thead className="border border-base-300">
                        <tr>
                            <th className="py-3 px-4 text-neutral">#</th>
                            <th className="py-3 px-4 text-neutral">Query</th>
                            <th className="py-3 px-4 text-neutral">Date</th>
                            <th className="py-3 px-4 text-neutral">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recommendations.map((rec, index) => {
                            const query = getQueryById(rec.queryId);
                            return (
                                <tr
                                    key={rec.id}
                                    className="border border-base-300 text-neutral">
                                    <td className="py-3 px-4">
                                        {index + 1}
                                    </td>
                                    <td className="py-3 px-4">
                                        {query?.title}
                                    </td>
                                    <td className="py-3 px-4">
                                        {rec.date}
                                    </td>
                                    <td className="py-3 px-4">
                                        <button className="btn btn-error btn-outline btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        {recommendations.length === 0 && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center py-6 text-gray-500">
                                    No recommendations to show.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendationsPage;
