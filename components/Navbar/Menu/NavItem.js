import Link from "next/link";

export default function NavItem({ current_url, active_url, title }) {
    const mobile = `mt-10 text-gray-500 hover:text-cyan-400
        dark:hover:text-cyan-400 font-medium
        dark:text-gray-300 text-2xl block font-Spartan
    `
    const dekstop = `md:mx-3 md:my-0`
    const active_item_style = ' text-cyan-500';

    let nav_item = mobile.concat(dekstop);
    
    if (active_url === current_url) {
        nav_item += active_item_style;
    }

    return (
      <>
            <Link href = { current_url } >
                <a className = { nav_item }>
                    { title }
                </a>
            </Link>
        </>
    );
}
