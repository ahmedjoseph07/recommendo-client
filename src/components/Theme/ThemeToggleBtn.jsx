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
        <button onClick={toggleTheme} className="cursor-pointer mr-2 border-0 ">
            {theme === "light" ? (
                <FiMoon className="w-6 h-6"/>
            ) : (
                <FiSun className="w-6 h-6"/>
            )}
        </button>
    );
};

export default ThemeToggleBtn;
