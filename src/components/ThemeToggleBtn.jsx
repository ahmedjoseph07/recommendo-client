import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
const ThemeToggleBtn = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-md btn-outline border-0 ">
            {theme === "light" ? (
                <FiMoon className="swap-off w-6 h-6 text-neutral" />
            ) : (
                <FiSun className="swap-on w-6 h-6 text-neutral" />
            )}
        </button>
    );
};

export default ThemeToggleBtn;
