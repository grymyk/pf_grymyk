import React from "react";

function FilterButton({ isPressed, setFilter, name }) {
    const basic_style = `mx-1 border-0 py-2 px-6 font-medium focus:outline-none
        rounded-md text-lg dark:text-gray-300 dark:hover:text-cyan-500
    `
    const default_class = basic_style + ` text-gray-700 bg-transparent
        hover:text-cyan-500
    `
    const active_class = basic_style + ` text-white bg-gray-700
        hover:text-white hover:bg-cyan-500 dark:hover:text-white
    `
    const btn_class = isPressed ? active_class: default_class;
    
    return (
        <button type = "button"
            className = { btn_class }
            aria-pressed = { isPressed }
            onClick = { () => setFilter(name) }
        >
            <span>{ name }</span>
      </button>
    );
}

export default FilterButton;