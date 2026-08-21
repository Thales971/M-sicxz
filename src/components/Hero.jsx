import { Link } from 'react-router-dom';
import { musicas } from '../data/songs';
import { MusicCard } from './MusicCard';

const musicasInfinitas = [...musicas, ...musicas];

export function Hero() {
  return (
    <main
      id="inicio"
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-slate-100 px-4 pb-16 pt-28 transition-colors dark:bg-[#0B1E30] sm:px-8 md:px-16 md:pt-32"
    >
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          display: flex;
          width: max-content;
          animation: carousel 25s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl py-10 sm:py-15">
        <div className="flex flex-col items-start gap-6 px-1 sm:px-5">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-[#0B1E30] dark:text-white">Melhores faixas</p>
            <h1 className="py-2.5 text-3xl font-extrabold uppercase tracking-tight text-[#0B1E30] dark:text-white md:text-5xl">
              MÚSICAS EM ALTA
            </h1>
            <div className="flex items-center justify-start gap-4 pt-4">
              <Link
                to="/musicas"
                className="rounded-3xl bg-[#51AFF7] px-6 py-3 font-semibold text-black shadow-[0_0_15px_rgba(81,175,247,0.4)] transition-colors hover:bg-[#4196E0]"
              >
                Veja todas
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-carousel gap-4 sm:gap-6">
          {musicasInfinitas.map((musica, index) => (
            <MusicCard
              key={`${musica.id}-${index}`}
              titulo={musica.titulo}
              artista={musica.artista}
              capa={musica.imagem}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
