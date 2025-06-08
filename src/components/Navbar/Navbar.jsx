import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggleBtn from "../ThemeToggleBtn";
import logo from "../../assets/logo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal.jsx/RegisterModal";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItemStyle = "hover:text-secondary hover:scale-105 transition-transform duration-100 ease-in-out";
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary/10 text-primary font-bold px-3 py-2 rounded-md block"
                            : `font-semibold px-3 py-2 rounded-md block ${navItemStyle}`
                    }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/queries"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary/10 text-primary font-bold px-3 py-2 rounded-md block"
                            : `font-semibold px-3 py-2 rounded-md block ${navItemStyle}`
                    }>
                    Queries
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full border-b shadow-sm">
            <div className="py-4 w-10/12 md:w-11/12 mx-auto flex justify-between items-center  px-4 relative z-20">
                {/* Navbar Start */}
                <div className="flex items-center gap-4">
                    {/* Mobile Hamburger / Cross Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md">
                            {isOpen ? (
                                <RxCross2 className="h-6 w-6" />
                            ) : (
                                <RxHamburgerMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    <Link to="/" className="w-12">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <Link
                        className="text-xl text-primary font-bold hidden md:block"
                        to="/">
                        Recommendo
                    </Link>
                </div>

                {/* Navbar Center (Desktop Menu) */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-4 px-1 text-xl">{navLinks}</ul>
                </div>

                {/* Navbar End */}
                <div className="flex items-center gap-4">
                    <ThemeToggleBtn />
                    <label htmlFor="login_modal" className="btn btn-primary btn-outline normal-case">
                        Login
                    </label>
                </div>

                {/* Mobile Dropdown with Slide Animation */}
                <div
                    className={`absolute left-4 right-4 top-20 mx-auto w-[90%] border border-secondary text-neutral shadow-lg rounded-md p-6 space-y-4 transform transition-all duration-300 ease-in-out lg:hidden ${
                        isOpen
                            ? "translate-y-4 opacity-100 pointer-events-auto"
                            : "-translate-y-8 opacity-0 pointer-events-none"
                    }`}>
                    <ul className="space-y-4">{navLinks}</ul>
                </div>
            </div>
        <LoginModal/>
        <RegisterModal/>
        </div>
    );
};

export default Navbar;
