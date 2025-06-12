import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";

const MyQueriesPage = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [myQueries, setMyQueries] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            axios(
                `${import.meta.env.VITE_SERVER_URL}/api/my-queries?email=${
                    user.email
                }`
            )
                .then((res) => {
                    setMyQueries(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);

    const handleDeleteQuery = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
                confirmButton: "btn btn-accent btn-outline btn-md mr-4",
                cancelButton: "btn btn-error btn-outline btn-md",
            },

            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(
                        `${import.meta.env.VITE_SERVER_URL}/api/delete/${id}`
                    )
                    .then((res) => {
                        if (res.data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your group has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                            });

                        setMyQueries((prev) => {
                            return prev.filter((query) => query._id !== id);
                        });
                    })
                    .catch((err) => {
                        console.err(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error",
                            showConfirmButton: false,
                        });
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h1 className="text-2xl md:text-3xl font-bold text-start mb-8">My Queries</h1>
            <div className="bg-base-200 p-6 rounded-xl text-center mb-8 shadow">
                <h2 className="md:text-xl md:text-3xl font-semibold mb-3">
                    Explore Your  Queries
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
                    {myQueries.map((query, index) => (
                        <motion.div
                            key={query._id}
                            className="bg-base-100 border group rounded-xl p-5 border-base-300 shadow hover:shadow-2xl duration-400 hover:scale-105 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                {query.queryTitle}
                            </h3>
                            <p className="text-sm mb-2">{query.productBrand}</p>
                            <p className="text-xs mb-4">
                                posted at:{" "}
                                <span className="font-semibold">
                                    {new Date(
                                        query.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    to={`/my-queries/${query._id}`}
                                    className="btn btn-sm btn-secondary btn-outline">
                                    View Details
                                </Link>
                                <Link
                                    to={`/update/${query._id}`}
                                    className="btn btn-sm btn-outline btn-accent">
                                    Update
                                </Link>
                                <button
                                    onClick={() => handleDeleteQuery(query._id)}
                                    className="btn btn-sm btn-outline btn-error">
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
