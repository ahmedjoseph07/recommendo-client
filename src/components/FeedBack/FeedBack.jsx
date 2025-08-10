import React, { useState } from "react";
import axios from "axios";

const SendFeedback = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message) {
            setStatusMessage("Please fill in both email and message.");
            return;
        }

        setLoading(true);
        setStatusMessage(null);

        try {

            await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/feedback`, {
                email,
                message,
            });

            setStatusMessage("Feedback sent successfully! Thank you.");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);
            setStatusMessage("Failed to send feedback. Please try again.");
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 md:w-6/12 mx-auto mt-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Send Us Feedback
            </h2>
            <p className="text-secondary text-center max-w-xl mx-auto mb-8">
                We value your feedback! Please share your thoughts or report any
                issues.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-outline border-secondary/30"
                    disabled={loading}>
                    {loading ? "Sending..." : "Send Feedback"}
                </button>
            </form>
            {statusMessage && (
                <p className="mt-6 text-center text-sm text-primary">
                    {statusMessage}
                </p>
            )}
        </div>
    );
};

export default SendFeedback;
