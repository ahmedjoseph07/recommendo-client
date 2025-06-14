import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from  "axios";
import Loading from "../components/Loading/Loading";

const RecommendedPage = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            axios(
                `${import.meta.env.VITE_SERVER_URL}/api/recommended?userEmail=${
                    user.email
                }`
            ).then((res) => {
                const allRecs = res.data.flatMap((query) =>
                    query.recommendations.map((rec) => ({
                        queryTitle: query.queryTitle,
                        productName: query.productName,
                        productBrand: query.productBrand,
                        recommenderName: rec.recommenderName,
                        recommenderEmail: rec.recommenderEmail,
                        recommendationTitle: rec.recommendationTitle,
                        recommendationReason: rec.recommendationReason,
                        createdAt: new Date(rec.createdAt).toLocaleString(),
                    }))
                );
                setRecommendations(allRecs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching recommendations:", err);
                setLoading(false);
            });
        }
    }, [user,setLoading]);

    if(loading) return <Loading/>

    return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Recommended For Me
            </h2>

            {recommendations.length === 0 ? (
                <p className="text-neutral text-center text-lg py-10">
                    You haven’t received any recommendations yet.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-sm border border-base-300">
                        <thead className="bg-base-200">
                            <tr>
                                <th>#</th>
                                <th>Query Title</th>
                                <th>Product</th>
                                <th>Brand</th>
                                <th>Recommendation Title</th>
                                <th>Recommender</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{rec.queryTitle}</td>
                                    <td>{rec.productName}</td>
                                    <td>{rec.productBrand}</td>
                                    <td>{rec.recommendationTitle}</td>
                                    
                                    <td>
                                        {rec.recommenderName} <br />
                                        <span className="text-xs text-gray-500">
                                            {rec.recommenderEmail}
                                        </span>
                                    </td>
                                    <td>{rec.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecommendedPage;
