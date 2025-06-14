import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
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

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleAddRecommendation = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());
        const recommendationData = {
            ...formData,
            queryId: id,
            queryTitle:query.queryTitle,
            productName:query.productName,
            queryUserEmail: query.userEmail,
            queryUserName:query.userName,
            recommenderEmail: user.email,
            recommenderName: user.displayName,
            createdAt: new Date(),
        };

        axios
            .post(`${import.meta.env.VITE_SERVER_URL}/api/add-recommendation`, {
                recommendationData,
            })
            .then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Recommendation Added Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/queries");
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    if (loading) return <Loading />;

    return (
        <div className="w-11/12 md:w-8/12 mx-auto px-6 py-10 space-y-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Query Details</h3>
                <p>
                    <span className="font-semibold">Name:</span>{" "}
                    {query.userName}
                </p>
                <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {query.userEmail}
                </p>
                <p>
                    <span className="font-semibold">Product:</span>{" "}
                    {query.productName}
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
                    <span className="font-semibold">Query Title:</span>{" "}
                    {query.queryTitle}
                </p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                    Add a Recommendation
                </h3>
                <form className="space-y-6" onSubmit={handleAddRecommendation}>
                    <div>
                        <label className="font-semibold">
                            Recommendation Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Try Pepsi"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            name="recommendationTitle"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Recommended Product Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Pepsi"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            name="recommendedProductName"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Recommended Product Image URL
                        </label>
                        <input
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            name="recommendationImageURL"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Recommendation Reason
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Explain your recommendation"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            name="recommendationReason"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-outline btn-md">
                        Add Recommendation
                    </button>
                </form>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">All Recommendations</h3>
                <div className="space-y-4">

                    {recommendations.length===0 ? <p>No recommendations given yet</p> : recommendations.map((rec, index) => (
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
                                    {rec.recommenderEmail}) on {new Date(rec.createdAt).toLocaleDateString()}
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
