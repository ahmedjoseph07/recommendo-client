import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useState } from "react";
import Loading from "../components/Loading/Loading";

const MyQueriesPage = () => {
    const { user,loading,setLoading } = useContext(AuthContext);
    const [myQueries, setMyQueries] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            axios(
                `${import.meta.env.VITE_SERVER_URL}/api/my-queries?email=${
                    user.email
                }`
            )
                .then((res) => {
                    console.log(res.data);
                    setMyQueries(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <div className="bg-base-200 p-6 rounded-xl text-center mb-8 shadow">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    My Queries
                </h2>
                <p className="py-4">
                    Easily manage all your posted queries in one place. From
                    tech recommendations to lifestyle suggestions, view, update,
                    or remove your questions anytime. Stay in control and get
                    personalized help tailored to your needs.
                </p>
                <Link
                    to="/add-query"
                    className="btn btn-primary btn-outline btn-sm">
                    Add New Query
                </Link>
            </div>

            {myQueries.length === 0 ? (
                <div className="text-center space-y-4 mt-10">
                    <p className="text-lg">
                        You haven't added any queries yet.
                    </p>
                    <Link
                        to="/add-query"
                        className="btn btn-outline btn-sm btn-primary">
                        Add Your First Query
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myQueries.map((q, index) => (
                        <motion.div
                            key={q._id}
                            className="bg-base-100 border group rounded-xl p-5 border-base-300 shadow hover:shadow-2xl duration-400 hover:scale-105 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                {q.queryTitle}
                            </h3>
                            <p className="text-sm mb-2">{q.productBrand}</p>
                            <p className="text-xs mb-4">
                                posted at:{" "}
                                <span className="font-semibold">
                                    {new Date(q.createdAt).toLocaleDateString()}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    to={`/my-queries/${q._id}`}
                                    className="btn btn-sm btn-secondary btn-outline">
                                    View Details
                                </Link>
                                <Link
                                    to={`/update/${q._id}`}
                                    className="btn btn-sm btn-outline btn-accent">
                                    Update
                                </Link>
                                <button className="btn btn-sm btn-outline btn-error">
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyQueriesPage;
