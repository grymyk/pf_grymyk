
export default function HamburgerMenu({ handleToggle, isActive }) {
    const bar_style = `bg-gray-700 dark:bg-gray-300
        my-1.5 mx-auto w-6 h-0.5 ease-in-out
        duration-300 transition-all hover:bg-cyan-400
    `
    const hamburger = `block cursor-pointer md:hidden`

    let first_bar = bar_style
    let second_bar = bar_style
    let third_bar = bar_style

    const activeBars = [
        `translate-y-2 rotate-45`,
        `opacity-0`,
        `-translate-y-2 -rotate-45`
    ]
 
    if ( isActive ) {
        first_bar = bar_style + activeBars[0]
        second_bar = bar_style + activeBars[1]
        third_bar = bar_style + activeBars[2]
    }

    return (
        <div className = { hamburger }
            onClick = { handleToggle }
        >
            <div className = { first_bar }></div>
            <div className = { second_bar }></div>
            <div className = { third_bar }></div>
        </div>       
    )
}