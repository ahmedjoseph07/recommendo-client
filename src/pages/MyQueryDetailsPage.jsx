import React from "react";

const dummyQuery = {
    id: "query123",
    queryTitle: "Is there a better alternative with similar quality?",
    productName: "Coca Cola",
    userEmail: "creator@example.com",
    userName: "Query Creator",
};

const dummyRecommendations = [
    {
        title: "Try Pepsi",
        productName: "Pepsi",
        image: "https://via.placeholder.com/100",
        reason: "Tastes similar but supports a different brand.",
        recommenderEmail: "john@example.com",
        recommenderName: "John Doe",
        date: "2025-06-10",
    },
    {
        title: "RC Cola is underrated",
        productName: "RC Cola",
        image: "https://via.placeholder.com/100",
        reason: "Cheaper and available everywhere.",
        recommenderEmail: "lisa@example.com",
        recommenderName: "Lisa Ray",
        date: "2025-06-09",
    },
];

const QueryDetailsPage = () => {
    return (
        <div className="w-11/12 md:w-8/12 mx-auto px-6 py-10 space-y-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">User Information</h3>
                <p>
                    <span className="font-semibold">Name:</span>{" "}
                    {dummyQuery.userName}
                </p>
                <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {dummyQuery.userEmail}
                </p>
                <p>
                    <span className="font-semibold">Product:</span>{" "}
                    {dummyQuery.productName}
                </p>
                <p>
                    <span className="font-semibold">Query Title:</span>{" "}
                    {dummyQuery.queryTitle}
                </p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">All Recommendations</h3>
                <div className="space-y-4">
                    {dummyRecommendations.map((rec, index) => (
                        <div
                            key={index}
                            className="flex gap-4 border p-4 rounded-xl items-start bg-base-100">
                            <img
                                src={rec.image}
                                alt={rec.productName}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h4 className="font-bold text-lg">
                                    {rec.title}
                                </h4>
                                <p className="text-sm">
                                    <span className="font-semibold">
                                        Product:
                                    </span>{" "}
                                    {rec.productName}
                                </p>
                                <p className="mt-2">{rec.reason}</p>
                                <p className="mt-2 text-sm">
                                    Recommended by {rec.recommenderName} (
                                    {rec.recommenderEmail}) on {rec.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QueryDetailsPage;
