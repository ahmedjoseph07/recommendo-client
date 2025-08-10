import React from "react";

const FAQ = () => {
    return (
        <div className="w-11/12 md:w-8/12 mx-auto my-10">
            <h2 className="text-2xl md:text-3xl text-primary font-extrabold mb-6 px-6 text-center">
                Frequently Asked Questions
            </h2>

            <div className="collapse collapse-arrow border border-secondary  rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    What is Recommendo?
                </div>
                <div className="collapse-content">
                    <p>
                        Recomendo is a recommendation platform that helps users
                        find the best products tailored to their needs.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border border-secondary rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    How do I submit feedback?
                </div>
                <div className="collapse-content">
                    <p>
                        You can submit feedback through our contact form, and we
                        will get back to you as soon as possible.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border border-secondary rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    Is Recomendo free to use?
                </div>
                <div className="collapse-content">
                    <p>Yes, Recomendo is completely free for all users.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
