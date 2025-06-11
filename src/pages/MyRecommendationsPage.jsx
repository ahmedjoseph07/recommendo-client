import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";

const MyRecommendationsPage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            axios(
                `${import.meta.env.VITE_SERVER_URL}/api/my-recommendations/${
                    user.email
                }`
            )
                .then((res) => {
                    setRecommendations(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);

    const handleDeleteRecommendation = (id,queryId) => {
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
                    .delete(`${import.meta.env.VITE_SERVER_URL}/api/delete-rec/${id}/${queryId}`,{
                        data:{queryId}
                    })
                    .then((res) => {
                        if (res.data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your group has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer:1500,
                            });
                        }

                        setRecommendations((prev) => {
                            return prev.filter((rec) => rec._id !== id);
                        });
                    })
                    .catch((err) => {
                        console.error(err);
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

    if (loading) return <Loading />;

    return (
        <div className="w-11/12 md:w-10/12 mx-auto px-6 py-10 ">
            <h2 className="text-2xl font-semibold mb-6">My Recommendations</h2>

            <div className="overflow-x-auto">
                <table className="table w-full shadow-xl rounded-lg">
                    <thead className="border border-base-300">
                        <tr>
                            <th className="py-3 px-4 text-neutral">#</th>
                            <th className="py-3 px-4 text-neutral">Title</th>
                            <th className="py-3 px-4 text-neutral">Date</th>
                            <th className="py-3 px-4 text-neutral">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recommendations.map((rec, index) => {
                            return (
                                <tr
                                    key={rec._id}
                                    className="border border-base-300 text-neutral">
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4">
                                        {rec.recommendationTitle}
                                    </td>
                                    <td className="py-3 px-4">
                                        {new Date(
                                            rec.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() =>
                                                handleDeleteRecommendation(rec._id,rec.queryId)
                                            }
                                            className="btn btn-error btn-outline btn-sm">
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
