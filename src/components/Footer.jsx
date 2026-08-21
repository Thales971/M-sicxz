import {
  FiArrowUpRight,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiMail,
  FiMusic,
  FiTwitter,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { generos } from '../data/genres';
import { navigationLinks } from '../data/navigation';

const socialLinks = [
  { label: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/' },
  { label: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/' },
  { label: 'Twitter', icon: FiTwitter, href: 'https://twitter.com/' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#51AFF7]/25 bg-white text-[#0B1E30] transition-colors dark:bg-[#0B1E30] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Musicxzz - início">
              <span className="flex size-9 items-center justify-center rounded-lg bg-[#FFD900] text-[#0B1E30]">
                <FiMusic size={20} />
              </span>
              <span className="text-xl font-black tracking-tight">Musicxzz</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Um espaço para encontrar artistas, explorar novas faixas e guardar as músicas que
              fazem sentido para você.
            </p>
            <Link
              to="/formulario"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#51AFF7] px-4 py-2.5 text-sm font-bold text-[#0B1E30] transition hover:bg-[#FFD900]"
            >
              Descubra seu artista <FiArrowUpRight size={17} />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFD900]">
              Explorar
            </h2>
            <nav className="mt-3 flex flex-col items-start gap-2" aria-label="Links do rodapé">
              {navigationLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-slate-600 transition hover:text-[#51AFF7] dark:text-slate-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFD900]">
              Gêneros
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {generos
                .filter(genre => genre.value !== 'todos')
                .map(genre => (
                  <Link
                    key={genre}
                    to={`/musicas?genero=${genre.value}`}
                    className="rounded-full border border-[#51AFF7]/30 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#51AFF7] hover:text-[#0B1E30] dark:text-slate-300 dark:hover:text-white"
                  >
                    {genre.label}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFD900]">
              Fique por dentro
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Receba novidades sobre artistas e novas descobertas musicais.
            </p>
            <a
              href="mailto:oi@musicxzz.com"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1E30] hover:text-[#51AFF7] dark:text-white"
            >
              <FiMail className="text-[#51AFF7]" /> oi@musicxzz.com
            </a>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-white/15 p-2.5 text-slate-300 transition hover:border-[#51AFF7] hover:bg-[#51AFF7]/15 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Musicxzz. Feito para quem vive música.</p>
          <p className="inline-flex items-center gap-1">
            Criado com <FiHeart className="text-[#FFD900]" size={14} fill="currentColor" /> e boas
            faixas.
          </p>
        </div>
      </div>
    </footer>
  );
}
