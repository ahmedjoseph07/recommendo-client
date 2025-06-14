import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading/Loading";

const QueryDetailsPage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [query, setQuery] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios(`${import.meta.env.VITE_SERVER_URL}/api/query/${id}`)
            .then((res) => {
                setQuery(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_SERVER_URL}/api/recommendations/${id}`)
            .then((res) => {
                setRecommendations(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loading />;

    return (
        <div className="w-11/12 md:w-8/12 mx-auto px-6 py-10 space-y-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-xl space-y-3">
                <h3 className="text-2xl font-bold mb-4">Query Details</h3>

                <div className="flex items-center gap-3">
                    <img
                        src={query.profileImg}
                        alt={query.userName}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{query.userName}</p>
                        <p className="text-sm text-neutral">
                            {query.userEmail}
                        </p>
                    </div>
                </div>

                <p>
                    <span className="font-semibold">Product:</span>{" "}
                    {query.productName}
                </p>
                <p>
                    <span className="font-semibold">Brand:</span>{" "}
                    {query.productBrand}
                </p>
                <p>
                    <span className="font-semibold">Query Title:</span>{" "}
                    {query.queryTitle}
                </p>
                <p>
                    <span className="font-semibold">Boycotting Reason:</span>{" "}
                    {query.boycottingReason}
                </p>
                <p>
                    <span className="font-semibold">Created At:</span>{" "}
                    {new Date(query.createdAt).toLocaleString()}
                </p>
                <p>
                    <span className="font-semibold">
                        Total Recommendations:
                    </span>{" "}
                    {query.recommendationCount}
                </p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">All Recommendations</h3>
                <div className="space-y-4">
                    {recommendations.length === 0 ? (
                        <p>No recommendations given yet</p>
                    ) : (
                        recommendations.map((rec, index) => (
                            <div
                                key={index}
                                className="flex gap-4 border p-4 rounded-xl items-start bg-base-100">
                                <img
                                    src={rec.recommendationImageURL}
                                    alt={rec.recommendationTitle}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">
                                        {rec.recommendationTitle}
                                    </h4>
                                    <p className="text-sm ">
                                        <span className="font-semibold">
                                            Product:
                                        </span>{" "}
                                        {rec.recommendedProductName}
                                    </p>
                                    <p className="mt-2">{rec.reason}</p>
                                    <p className="mt-2 text-sm">
                                        Recommended by {rec.recommenderName} (
                                        {rec.recommenderEmail}) on{" "}
                                        {new Date(
                                            rec.createdAt
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default QueryDetailsPage;
