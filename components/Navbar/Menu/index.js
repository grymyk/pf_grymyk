import { useState } from "react"
import NavItem from './NavItem';
import HamburgerMenu from './Hamburger'
import { useRouter } from 'next/router'

export default function Menu() {
    const mobile = `text-center duration-300
        flex-col top-20 w-full -left-full absolute z-10
        h-full overflow-hidden bg-white dark:bg-black
    `
    const dekstop = `md:flex md:flex-wrap md:items-center
        md:justify-between md:static md:w-auto
        md:bg-transparent md:flex-row md:bg-transparent
    `

    const open = `left-0`

    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen( !isOpen );
    };

    let menu_style = mobile.concat(dekstop);

    if ( isOpen ) {
        menu_style += open;
    }

    const links = [{
	    url: '/',
            id: 1,
            title: 'Home',
            active_cls: ''
        }, {
            url: '/projects',
            id: 2,
            title: 'Projects',
            active_cls: '',
        }, {
            url: '/contact',
            id: 4,
            title: 'Contact',
            active_cls: ''
    }]

    const router = useRouter()
    const active_url = router.pathname;
   
    const nav_list = links.map( (link) => {
        return <NavItem
            key = { link.id }
            title = { link.title }
            current_url = { link.url }
            active_url = { active_url }
        />
    }) 

    return (
        <>
            <div className = { menu_style }>
                { nav_list }
            </div>
            <HamburgerMenu
                handleToggle = { handleToggle }
                isOpen = { isOpen }
            />
        </>
        

    )
}