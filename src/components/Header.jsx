import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { navigationLinks } from '../data/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-4 bg-white/90 px-4 py-4 shadow-sm backdrop-blur dark:bg-[#0B1E30]/90 dark:shadow-black/20 sm:px-8 sm:py-5">
      <div className="flex items-center space-x-2">
        <Link to="/" onClick={closeMenu} className="cursor-pointer" aria-label="Musicxzz - inicio">
          <img
            className="size-12 object-contain sm:size-16"
            src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/cline.png"
            alt="Musicxzz"
          />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 sm:flex">
          <ThemeToggle />
          <nav className="flex items-center gap-1">
            {navigationLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive ? 'bg-[#FFD900] text-[#0B1E30]' : 'text-[#0B1E30] hover:bg-[#51AFF7]/15 dark:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen(current => !current)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="rounded-lg p-3 text-[#0B1E30] hover:bg-[#51AFF7]/20 dark:text-white"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-20 flex-col gap-2 rounded-2xl border border-[#51AFF7]/25 bg-white p-3 shadow-2xl dark:bg-[#0B1E30] sm:hidden`}
      >
        {navigationLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive ? 'bg-[#FFD900] text-[#0B1E30]' : 'text-[#0B1E30] hover:bg-[#51AFF7]/15 dark:text-white'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
