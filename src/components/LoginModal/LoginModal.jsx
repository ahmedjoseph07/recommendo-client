import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const LoginModal = () => {
    const { googleLogin, login, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            document.getElementById("login_modal").checked = false;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User logged in succesfully",
                showConfirmButton: false,
                timer: 1200,
            });

            navigate("/");
        } catch (err) {
            console.error("Google Login failed:", err);
        }
    };
    

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = Object.fromEntries(new FormData(e.target).entries());
        const { email, password } = formData;
        login(email, password)
            .then((result) => {
                // result.user.getIdToken(true)
                setUser(result.user);
                e.target.reset();
                document.getElementById("login_modal").checked = false;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User logged in succesfully",
                    showConfirmButton: false,
                    timer: 1200,
                });
                navigate("/");
            })
            .catch((err) => {
                if (
                    err.message == "Firebase: Error (auth/invalid-credential)."
                ) {
                    setError("Invalid Credentials");
                } else {
                    setError(err.message);
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <input type="checkbox" id="login_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-md rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                        Welcome Back
                    </h3>
                    <form className="space-y-3" onSubmit={handleLogin}>
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
                        {error && <p className="text-xs text-error">{error}</p>}
                        <button className="btn btn-primary btn-outline border-secondary/30 border-1 w-full mt-2">
                            {loading ? (
                                <span className="loading loading-spinner text-accent loading-sm"></span>
                            ) : (
                                "Login"
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
                        Sign in with Google
                    </button>

                    <p className="text-sm text-center mt-4">
                        New here?{" "}
                        <label
                            htmlFor="login_modal"
                            className="text-secondary cursor-pointer hover:underline"
                            onClick={() => {
                                document.getElementById(
                                    "register_modal"
                                ).checked = true;
                            }}>
                            Register now
                        </label>
                    </p>

                    <div className="modal-action">
                        <label
                            htmlFor="login_modal"
                            className="btn btn-sm btn-accent btn-outline border-0">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
