import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t shadow-sm mt-10">
            <div className="footer w-10/12 md:w-11/12 mx-auto p-10 text-sm md:text-base flex flex-col md:flex-row md:justify-between gap-10">
                <div className="md:w-1/4">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-primary mb-2 block">
                        Recommendo
                    </Link>
                    <p>
                        Empowering users with personalized recommendations.
                        <br />
                        Made with ❤️ by JOSEPH AHMED.
                    </p>
                </div>

                <nav>
                    <header className="footer-title text-accent">Pages</header>
                    <Link className="link link-hover hover:text-secondary">
                        Home
                    </Link>
                    <Link className="link link-hover hover:text-secondary">
                        Queries
                    </Link>
                    <Link className="link link-hover hover:text-secondary">
                        About
                    </Link>
                    <Link className="link link-hover hover:text-secondary">
                        Contact
                    </Link>
                </nav>

                <nav>
                    <header className="footer-title text-accent">Legal</header>
                    <Link className="link link-hover hover:text-secondary">
                        Terms of use
                    </Link>
                    <Link className="link link-hover hover:text-secondary">
                        Privacy policy
                    </Link>
                    <Link className="link link-hover hover:text-secondary">
                        Cookie policy
                    </Link>
                </nav>

                <nav>
                    <header className="footer-title text-accent">
                        Social
                    </header>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.facebook.com" className="text-primary hover:text-secondary transition-transform scale-120 cursor-pointer hover:scale-150">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.x.com" className="text-primary hover:text-secondary transition-transform scale-120 cursor-pointer hover:scale-150">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" className="text-primary hover:text-secondary transition-transform scale-120 cursor-pointer hover:scale-150">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.github.com" className="text-primary hover:text-secondary transition-transform scale-120 cursor-pointer hover:scale-150">
                            <FaGithub />
                        </a>
                    </div>
                </nav>
            </div>

            <div className="text-center py-4 border-t text-sm text-secondary">
                © {new Date().getFullYear()} Recommendo — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
