import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início' },
  { to: '/artistas', label: 'Artistas' },
  { to: '/musicas', label: 'Músicas' },
  { to: '/formulario', label: 'Formulário' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between gap-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
      <div className="flex items-center space-x-2">
        <Link to="/" onClick={closeMenu} className="cursor-pointer" aria-label="Musicxzz - inicio">
          <img
            className="size-12 object-contain sm:size-16"
            src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/cline.png"
            alt="Musicxzz"
          />
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(current => !current)}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        className="rounded-lg p-3 text-white hover:bg-[#51AFF7]/20 sm:hidden"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-20 flex-col gap-2 rounded-2xl border border-[#51AFF7]/25 p-3 shadow-2xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
      >
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive ? ' text-white-900' : 'text-white hover:bg-[#51AFF7]/15'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
