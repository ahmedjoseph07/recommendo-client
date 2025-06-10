import React from "react";

const UpdateDetailspage = () => {

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                    Update Your Recommendation
                </h3>
                <form className="space-y-6">
                    <div>
                        <label className="font-semibold">
                            Recommendation Title
                        </label>
                        <input
                            type="text"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="font-semibold">
                            Recommended Product Name
                        </label>
                        <input
                            type="text"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Recommended Product Image URL
                        </label>
                        <input
                            type="text"
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Recommendation Reason
                        </label>
                        <textarea
                            rows={4}
                            className="border border-secondary p-4 rounded-xl w-full transition-all duration-300 focus:outline-none"></textarea>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-outline btn-md">
                        Add Recommendation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateDetailspage;
