import Logo from './Logo'
import Menu from './Menu/'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const items_style = `flex flex-wrap items-center justify-between`

  return (
    <header className="body-font border-b-2 border-violet-100 dark:border-gray-100">
        <nav className = {items_style} >
            <Logo />
            <div className = {items_style} >
                <Menu />
                <ThemeSwitcher />
            </div>
        </nav>
    </header>
  );
}
