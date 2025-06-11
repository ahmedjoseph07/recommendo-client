import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
const AddQueryPage = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleAddQuery = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());
        const queryData = {
            ...formData,
            userEmail: user.email,
            userName: user.displayName,
            profileImg: user.photoURL,
            createdAt: new Date(),
            recommendationCount: 0,
        };
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/add-query`,
                { queryData }
            );
            if (response.status === 201) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Query Added Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/my-queries")
                e.target.reset();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="w-11/12 md:w-8/12 mx-auto px-6 py-10">
            <div className="w-full bg-base-200 p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold mb-6">Add a New Query</h3>

                <form
                    onSubmit={handleAddQuery}
                    className="space-y-6 animate-fade-in">
                    <div>
                        <label className="label font-semibold text-base-content mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="productName"
                            placeholder="e.g. Coca Cola"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="label font-semibold text-base-content mb-1">
                            Product Brand
                        </label>
                        <input
                            type="text"
                            name="productBrand"
                            placeholder="e.g. The Coca-Cola Company"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="label font-semibold text-base-content mb-1">
                            Product Image URL
                        </label>
                        <input
                            type="text"
                            name="productImageURL"
                            placeholder="https://example.com/image.jpg"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="label font-semibold text-base-content mb-1">
                            Query Title
                        </label>
                        <input
                            type="text"
                            name="queryTitle"
                            placeholder="Is there a better alternative with similar quality?"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="label font-semibold text-base-content mb-1">
                            Boycotting Reason
                        </label>
                        <textarea
                            name="boycottingReason"
                            placeholder="Explain why you're avoiding this product"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                            rows={4}
                            required></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-outline">
                        Add Query
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddQueryPage;
