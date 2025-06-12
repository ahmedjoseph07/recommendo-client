import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const AllQueriesPage = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRecommend = async (queryId) => {
        if (!user) {
            Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to recommend this query.",
                timer: 1500,
                showConfirmButton: false,
            });
            return;
        } else {
            navigate(`/queries/recommend/${queryId}`);
        }
    };

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

    const sortedQueries = [...queries].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-start mb-8">
                All Queries
            </h2>

            {sortedQueries.length === 0 ? (
                <div className="flex flex-col items-center justify-center bg-base-200 p-8 rounded-xl shadow-md text-center min-h-[300px]">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                        No Queries Found
                    </h2>
                    <Link
                        to="/add-query"
                        className="btn btn-primary btn-outline btn-sm">
                        Add New Query
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedQueries.map((query, index) => (
                        <motion.div
                            key={query._id}
                            className="border border-base-300 rounded-xl p-5 shadow-md hover:shadow-2xl hover:scale-105 duration-400 transition-all group cursor-pointer bg-base-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">
                                    {query.userEmail}
                                </span>
                                <span className="text-xs text-neutral opacity-70">
                                    {new Date(
                                        query.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                {query.queryTitle}
                            </h3>

                            <div className="flex justify-between items-center">
                                <span className="text-lg text-secondary font-medium">
                                    {query.recommendationCount} Recommendations
                                </span>
                                {/* <Link to={`/queries/recommend/${query._id}`}> */}
                                <button
                                    onClick={() => handleRecommend(query._id)}
                                    className="btn btn-sm btn-outline btn-primary">
                                    👍 Recommend
                                </button>
                                {/* </Link> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllQueriesPage;
