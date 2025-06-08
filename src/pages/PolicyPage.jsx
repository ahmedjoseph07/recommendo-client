import React from "react";

const PolicyPage = () => {
    return (
        <section className="w-10/12 md:w-8/12 mx-auto mt-12 mb-20 text-base-content">
            <h2 className="text-3xl font-bold text-primary mb-6">
                Privacy Policy
            </h2>
            <p className="mb-4">
                At Recommendo, we value your privacy and are committed to
                protecting your personal data. This policy outlines what
                information we collect, how we use it, and your rights.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    We collect data like name, email, and user preferences to
                    personalize recommendations.
                </li>
                <li>We never sell your data to third parties.</li>
                <li>
                    Cookies may be used for analytics and performance tracking.
                </li>
                <li>
                    You have the right to access or delete your data at any
                    time.
                </li>
            </ul>
            <p>
                By using Recommendo, you agree to the practices described in
                this policy. Please review it regularly to stay informed.
            </p>
        </section>
    );
};

export default PolicyPage;
