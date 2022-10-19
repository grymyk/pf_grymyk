import Logo from './Logo'
import Menu from './Menu/'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  return (
    <header className="body-font border-b-2 border-violet-100 dark:border-gray-100">
        <nav className="flex flex-wrap items-center justify-between">
            <Logo />
            <Menu />
            <ThemeSwitcher />
        </nav>
    </header>
  );
}
