import React from "react";

const ContactPage = () => {
    return (
        <section className="w-10/12 md:w-6/12 mx-auto mt-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Contact Us
            </h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                    required
                />
                <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="border border-secondary/30 p-4 rounded-xl focus:outline-0 w-full"
                    required></textarea>
                <button className="btn btn-primary btn-outline border-secondary/30">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactPage;
