import React from "react";

const TermsPage = () => {
    return (
        <div className="w-10/12 md:w-8/12 mx-auto mt-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6">Terms of Use</h2>
            <p className="mb-4">
                By accessing and using Recommendo, you agree to the following terms and conditions. These terms are designed to protect both you and us, and to ensure that Recommendo continues to be a safe, respectful, and useful platform for everyone.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Users must be 13 years or older to use this platform.</li>
                <li>Do not misuse or exploit the recommendation engine.</li>
                <li>Respect other users and avoid harmful or offensive behavior.</li>
                <li>Any unlawful activity on the platform is strictly prohibited.</li>
            </ul>
            <p>
                Recommendo reserves the right to suspend or terminate access for any user found violating these terms. These terms may be updated periodically, and continued use indicates agreement with the updated terms.
            </p>
        </div>
    );
};

export default TermsPage;
