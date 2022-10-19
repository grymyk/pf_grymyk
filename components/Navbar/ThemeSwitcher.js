import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect( () => {
    setMounted(true);
  }, []);

  return (
    <>
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 my-4 ml-8 focus:outline-none dark:text-gray-300 dark:rounded-xl"

            onClick={ () => setTheme(theme === "dark" ? "light" : "dark")}
        >

        { mounted && (
            <svg className="fill-gray-700 hover:fill-violet-400 dark:hover:fill-violet-400 dark:fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
            </svg>
        )}
        </button>
    </>
  );
}