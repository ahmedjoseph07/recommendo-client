import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSeeMore = async (queryId) => {
        if (!user) {
            Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to see more.",
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
        <div className="w-11/12 md:w-10/12 mx-auto my-10 min-h-[300px]">
            <h2 className="text-2xl text-primary md:text-3xl font-bold text-center mb-6">
                Recent Queries
            </h2>

            {sortedQueries.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center bg-base-200 rounded-xl p-8 shadow-inner min-h-[200px]">
                    <p className="text-center text-lg text-neutral-500">
                        No Recent Queries Found
                    </p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedQueries.map((query, index) => (
                        <motion.div
                            key={query._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer group p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-400 border border-base-300 bg-base-100">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                                    {query.queryTitle}
                                </h3>
                                <p className="text-sm text-neutral">
                                    {new Date(
                                        query.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <p className="text-sm text-neutral">
                                Product: {query.productName}
                            </p>
                            <p className="text-sm text-neutral">
                                Brand: {query.productBrand}
                            </p>

                            <button
                                onClick={()=>handleSeeMore(query._id)}
                                className="btn btn-outline btn-secondary my-4">
                                See More
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecentQueries;
