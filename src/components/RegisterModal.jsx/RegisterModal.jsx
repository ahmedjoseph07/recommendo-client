import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
const RegisterModal = () => {
    const { googleLogin, createUser, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            document.getElementById("register_modal").checked = false;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User logged succesfully",
                showConfirmButton: false,
                timer: 1200,
            });
            navigate("/");
        } catch (err) {
            console.error("Google Login failed:", err);
            
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());
        const { displayName, email, password, photoURL } = formData;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);

        if (!displayName || !email || !password || !photoURL) {
            setError("All fields are required");
            setLoading(false)
            return;
        } else if (!hasUppercase || !hasLowercase) {
            setLoading(false)
            setError(
                "Password must contain at least one uppercase and lowercase character"
            );
            return;
        } else if (password.length < 6) {
            setLoading(false)
            setError("Password must have at least 6 characters");
            return;
        }

        // Register user (also  updating profile-info in the firebase)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, {
                    displayName,
                    photoURL,
                })
                    .then(() => {
                        setUser({
                            ...user,
                            displayName,
                            photoURL,
                        });

                        document.getElementById(
                            "register_modal"
                        ).checked = false;
                        e.target.reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User registered succesfully",
                            showConfirmButton: false,
                            timer: 1200,
                        });

                        navigate("/");
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
            })
            .catch((err) => {
                if (err.message == "Firebase: Error (auth/invalid-email).") {
                    setError("Must enter a valid email");
                } else if (
                    err.message ==
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    setError("Email already in use");
                } else {
                    setError(err.message);
                    
                }
            })
            .finally(() => setLoading(false));
    };

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
                    <form className="space-y-3" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                            name="displayName"
                            onChange={() => setError("")}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                            name="email"
                            onChange={() => setError("")}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                            name="password"
                            onChange={() => setError("")}
                        />
                        <input
                            type="text"
                            placeholder="PhotoURL"
                            className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                            required
                            name="photoURL"
                            onChange={() => setError("")}
                        />
                        {error && <p className="text-error text-xs">{error}</p>}
                        <button
                            disabled={loading}
                            className="btn btn-primary btn-outline border-secondary/30 border-1 w-full mt-2">
                            {loading ? (
                                <>
                                    <span className="loading loading-spinner text-accent loading-sm"></span>
                                </>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>

                    <div className="divider text-neutral">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline btn-secondary border-secondary/30 w-full flex justify-center items-center gap-2">
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
