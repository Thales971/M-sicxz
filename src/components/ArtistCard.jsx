import { FiArrowUpRight, FiMusic } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function ArtistCard({ artist }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#51AFF7]/25 bg-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#51AFF7] dark:bg-slate-900">
      <img
        src={artist.imagem}
        alt={`Imagem de ${artist.nome}`}
        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#51AFF7]">
              {artist.genero}
            </p>
            <h2 className="text-2xl font-extrabold text-[#0B1E30] dark:text-white">
              {artist.nome}
            </h2>
          </div>
          <FiMusic className="shrink-0 text-[#FFD900]" size={22} />
        </div>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{artist.descricao}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-500">
            Destaque: <strong className="text-[#0B1E30]">{artist.destaque}</strong>
          </span>
          <Link
            to={`/artistas/${artist.id}`}
            className="inline-flex items-center gap-1 font-bold text-[#0B1E30] hover:text-[#51AFF7]"
          >
            Ver perfil <FiArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
