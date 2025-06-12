import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";

const UpdateDetailspage = () => {
    const { id } = useParams();
    const [query, setQuery] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [originalQuery, setOriginalQuery] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios(`${import.meta.env.VITE_SERVER_URL}/api/update/${id}`)
            .then((res) => {
                setQuery(res.data);
                setOriginalQuery(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch queries");
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());

        const isUnchanged = Object.keys(formData).every(
            (key) => formData[key] === originalQuery[key]
        );

        if (isUnchanged) {
            return Swal.fire({
                icon: "warning",
                title: "No changes detected",
                text: "Please update at least one field before submitting.",
                timer: 1500,
                showConfirmButton: false,
            });
        }
        const updatedQuery = formData;
        axios
            .put(`${import.meta.env.VITE_SERVER_URL}/api/update/${id}`, {
                updatedQuery,
            })
            .then((res) => {
                if (res.status == 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Query Added Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/my-queries");
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.error(err);
            });

        console.log(formData);
    };

    if (loading) return <Loading />;
    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="w-11/12 md:w-8/12 mx-auto my-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Update Your Query</h3>
                <form className="space-y-6" onSubmit={handleUpdate}>
                    <div>
                        <label className="font-semibold">Query Title</label>
                        <input
                            type="text"
                            name="queryTitle"
                            defaultValue={query.queryTitle}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            defaultValue={query.productName}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Product Brand</label>
                        <input
                            type="text"
                            name="productBrand"
                            defaultValue={query.productBrand}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Product Image URL
                        </label>
                        <input
                            type="text"
                            name="productImageURL"
                            defaultValue={query.productImageURL}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Boycotting Reason
                        </label>
                        <textarea
                            name="boycottingReason"
                            rows={4}
                            defaultValue={query.boycottingReason}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"></textarea>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            name="profileImg"
                            defaultValue={query.profileImg}
                            className="border border-secondary p-4 rounded-xl w-full focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-outline btn-md">
                        Update Query
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateDetailspage;
