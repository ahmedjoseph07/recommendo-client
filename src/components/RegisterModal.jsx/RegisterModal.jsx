import React from "react";

const RegisterModal = () => {
    return (
        <div>
            <input
                type="checkbox"
                id="register_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box w-full max-w-md rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                        Create an Account
                    </h3>
                    <form className="space-y-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="PhotoURL"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                        />
                        <button className="btn btn-primary btn-outline border-secondary/30 border-1 w-full mt-2">
                            Sign Up
                        </button>
                    </form>

                    <div className="divider text-neutral">OR</div>

                    <button className="btn btn-outline btn-secondary border-secondary/30 w-full flex justify-center items-center gap-2">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign up with Google
                    </button>

                    <p className="text-sm text-center mt-4">
                        Already have an account?{" "}
                        <label
                            htmlFor="register_modal"
                            className="text-secondary cursor-pointer hover:underline"
                            onClick={() => {
                                document.getElementById(
                                    "login_modal"
                                ).checked = true;
                            }}>
                            Login here
                        </label>
                    </p>

                    <div className="modal-action">
                        <label
                            htmlFor="register_modal"
                            className="btn btn-sm btn-accent btn-outline border-0">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
