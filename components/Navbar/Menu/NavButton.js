import Link from "next/link";

export default function NavButton({ text, url }) {
    const mobile = `mt-10 text-gray-500 hover:text-violet-400
        dark:hover:text-violet-400 font-medium
        dark:text-gray-300 text-2xl block
    `
    const dekstop = `md:mx-3 md:my-0`

    const nav_item = mobile + dekstop;
    
    return (
      <>
            <Link href = { url } >
                <a className = { nav_item }>
                    {text}
                </a>
            </Link>
        </>
    );
}
