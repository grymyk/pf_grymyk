import Link from "next/link";

export default function Logo() {
    const style = `ml-3 text-2xl w-10 mr-3
        hover:text-cyan-400 font-Spartan
    `

    return (
        <Link href="/">
            <a className = { style }>MG</a>
        </Link>
    );
}

