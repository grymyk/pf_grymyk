import { useState } from "react"
import NavButton from './NavButton';
import HamburgerMenu from './Hamburger'

export default function Menu() {
    const mobile = `text-center duration-300
        flex-col top-20 w-full -left-full absolute z-10
        h-full overflow-hidden bg-white dark:bg-black
    `
    const dekstop = `md:flex md:flex-wrap md:items-center
        md:justify-between md:static md:w-auto
        md:bg-transparent md:flex-row md:bg-transparent
    `

    const active = `left-0`

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive( !isActive );
    };

    let menu_style = mobile + dekstop;

    if (isActive) {
        menu_style += active;
    }

    return (
        <>
            <div className = { menu_style }>
                <NavButton text="Home" url="/" />
                <NavButton text="Projects" url="/projects" />
                {/* <NavButton text="Blog" url="/blog" /> */}
                <NavButton text="Contact" url="/contact" />
            </div>
            <HamburgerMenu
                handleToggle = { handleToggle }
                isActive = { isActive }
            />
        </>
        

    )
}