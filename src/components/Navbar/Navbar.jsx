import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ThemeToggleBtn from "../Theme/ThemeToggleBtn";
import logo from "../../assets/logo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal.jsx/RegisterModal";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "User logged out succesfully",
                    showConfirmButton: false,
                    timer: 1200,
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navItemStyle =
        "hover:text-secondary hover:scale-105 transition-transform duration-100 ease-in-out";
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
            {user && (
                <>
                    <li>
                        {" "}
                        <NavLink
                            to="/recommended-for-me"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-primary/10 text-primary font-bold px-3 py-2 rounded-md block"
                                    : `font-semibold px-3 py-2 rounded-md block ${navItemStyle}`
                            }>
                            Recommended For Me
                        </NavLink>
                    </li>
                    <li>
                        {" "}
                        <NavLink
                            to="/my-queries"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-primary/10 text-primary font-bold px-3 py-2 rounded-md block"
                                    : `font-semibold px-3 py-2 rounded-md block ${navItemStyle}`
                            }>
                            My Queries
                        </NavLink>
                    </li>
                    <li>
                        {" "}
                        <NavLink
                            to="/my-recommendations"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-primary/10 text-primary font-bold px-3 py-2 rounded-md block"
                                    : `font-semibold px-3 py-2 rounded-md block ${navItemStyle}`
                            }>
                            My Recommendations
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="w-full border-b border-secondary shadow-sm">
            <div className="py-4 w-10/12 md:w-11/12 mx-auto flex justify-between items-center  px-4 relative z-20">
                <div className="flex items-center gap-4">
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

                    <Link to="/" className="w-12 hidden md:block">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <Link
                        className="text-xl text-primary font-bold hidden md:block"
                        to="/">
                        Recommendo
                    </Link>
                </div>

                <div className="hidden lg:flex">
                    <ul className="flex gap-4 px-1 text-md">{navLinks}</ul>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggleBtn />
                    {user ? (
                        <>
                            <Tooltip
                                id="my-tooltip"
                                place="left"
                                style={{ zIndex: 99 }}
                            />
                            <img
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                className="w-10 cursor-pointer"
                                src={user.photoURL}
                                alt=""
                            />
                            <button
                                onClick={handleLogout}
                                className="btn btn-accent btn-outline text-neutral">
                                Logout 
                            </button>
                        </>
                    ) : (
                        <label
                            htmlFor="login_modal"
                            className="btn btn-primary btn-outline normal-case">
                            Login
                        </label>
                    )}
                </div>

                <div
                    ref={dropdownRef}
                    className={`absolute left-4 right-4 top-20 mx-auto w-[90%] border border-secondary text-neutral shadow-lg space-y-4 transform transition-all duration-300 ease-in-out lg:hidden ${
                        isOpen
                            ? "translate-y-8 opacity-100 pointer-events-auto"
                            : "-translate-y-8 opacity-0 pointer-events-none"
                    }`}>
                    <ul className="text-center bg-secondary">{navLinks}</ul>
                </div>
            </div>
            <LoginModal />
            <RegisterModal />
        </div>
    );
};

export default Navbar;
