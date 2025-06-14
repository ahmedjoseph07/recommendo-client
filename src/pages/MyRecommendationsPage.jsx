import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";

const MyRecommendationsPage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
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

    const handleDeleteRecommendation = (id, queryId) => {
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
                        `${
                            import.meta.env.VITE_SERVER_URL
                        }/api/delete-rec/${id}/${queryId}`,
                        { data: { queryId } }
                    )
                    .then((res) => {
                        if (res.data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recommendation has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                            setRecommendations((prev) =>
                                prev.filter((rec) => rec._id !== id)
                            );
                        }
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
        <div className="w-11/12 md:w-10/12 mx-auto py-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center md:text-start">
                My Recommendations
            </h2>

            {recommendations.length === 0 ? (
                <p className="text-neutral text-center text-lg py-10">
                    You haven’t made any recommendations yet.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-sm border border-base-300 shadow-md rounded-lg">
                        <thead className="bg-base-200">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    #
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Recommendation Title
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Recommended Product
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Recommendation Reason
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Date & Time
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec, index) => (
                                <tr
                                    key={rec._id}
                                    className="border border-base-300 text-neutral">
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">
                                        {rec.recommendationTitle}
                                    </td>
                                    <td className="px-4 py-3">
                                        {rec.recommendedProductName}
                                    </td>
                                    <td className="px-4 py-3">
                                        {rec.recommendationReason}
                                        
                                    </td>
                                    <td className="px-4 py-3">
                                        {new Date(
                                            rec.createdAt
                                        ).toLocaleString()}
                                    </td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() =>
                                                handleDeleteRecommendation(
                                                    rec._id,
                                                    rec.queryId
                                                )
                                            }
                                            className="btn btn-error btn-outline btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyRecommendationsPage;
