"use client"

import { useEffect, useState } from "react";

const ThemeController = () => {
    const [black, setBlack] = useState(false);
    const handleTheme = () => {
        setBlack(!black)
        if (black) {
            document.documentElement.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        }
    }
    // load theme if already saved on local storage


    // if already not saved on local storage, then before getting theme save first
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setBlack(true)
            document.documentElement.setAttribute("data-theme", "dark")
        } else {

            document.documentElement.setAttribute("data-theme", "light")
        }
    }, [])

console.log('black', black)
    return (
        <button
            onClick={handleTheme}
            className="p-2 bg-gray-200 rounded"
        >
            Toggle Theme ({black})
        </button>
    );
};

export default ThemeController;