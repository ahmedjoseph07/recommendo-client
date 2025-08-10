import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FiSearch, FiGrid } from "react-icons/fi";
import { RiTableLine } from "react-icons/ri";
import Swal from "sweetalert2";

const AllQueriesPage = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [layout, setLayout] = useState(() => {
        return localStorage.getItem("layout") || "grid";
    });

    useEffect(() => {
        localStorage.setItem("layout", layout);
    }, [layout]);

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

    const hasAnyQuery = queries.length > 0;

    const filteredQuries = [...queries]
        .filter((query) =>
            query.productName?.toLowerCase().includes(searchText.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "newest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
        });

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <div className="flex flex-col  md:items-center md:justify-center mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
                    All Queries
                </h2>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <FiSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Product Name"
                            className="w-full pl-10 pr-4 py-1 placeholder:text-sm border border-dashed border-neutral rounded-lg focus:outline-none"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-center cup">
                        <select
                            id="sort"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border border-dashed rounded-lg p-2 pl-2 pr-4 text-sm focus:outline-none">
                            <option
                                className="bg-secondary text-neutral cursor-pointer"
                                value="newest">
                                Newest First
                            </option>
                            <option
                                className="bg-secondary text-neutral cursor-pointer"
                                value="oldest">
                                Oldest First
                            </option>
                        </select>
                    </div>
                    <button
                        onClick={() => setLayout("grid")}
                        className={`btn btn-sm hidden md:block ${
                            layout === "grid" ? "btn-accent" : "btn-ghost"
                        }`}
                        title="Grid View">
                        <FiGrid title="Grid View" />
                    </button>
                    <button
                        onClick={() => setLayout("list")}
                        className={`btn btn-sm hidden md:block ${
                            layout === "list" ? "btn-accent" : "btn-ghost"
                        }`}
                        title="List View">
                        <RiTableLine title="Table View" />
                    </button>
                </div>
            </div>

            {filteredQuries.length === 0 ? (
                <div className="flex flex-col items-center justify-center bg-base-200 p-8 rounded-xl shadow-md text-center min-h-[300px]">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                        {hasAnyQuery
                            ? "No Queries Matched Your Search"
                            : "No Query Found"}
                    </h2>
                    {!hasAnyQuery && (
                        <Link
                            to="/add-query"
                            className="btn btn-primary btn-outline btn-sm">
                            Add New Query
                        </Link>
                    )}
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={layout}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`${
                            layout === "grid"
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                : "flex flex-col gap-4"
                        }`}>
                        {filteredQuries.map((query, index) => (
                            <motion.div
                                key={query._id}
                                className={`border border-base-300 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-2xl hover:scale-[1.02] duration-300 transition-all group cursor-pointer bg-base-100 w-full ${
                                    layout === "list"
                                        ? "max-w-full sm:w-10/12 mx-auto"
                                        : ""
                                }`}
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

                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {query.queryTitle}
                                </h3>
                                <p className="text-sm font-semibold mb-2">
                                    {query.productName}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sx text-secondary font-medium">
                                        {query.recommendationCount} Recommendo
                                    </span>

                                    <button
                                        onClick={() =>
                                            handleRecommend(query._id)
                                        }
                                        className="btn btn-sm btn-outline btn-primary">
                                        👍 Recommend
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default AllQueriesPage;
