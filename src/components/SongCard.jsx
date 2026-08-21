import { FiExternalLink, FiHeart } from 'react-icons/fi';

export function SongCard({ song, isFavorite, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#51AFF7]/25 bg-white shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-[#51AFF7]">
      <div className="relative">
        <img
          src={song.imagem}
          alt={`Capa de ${song.titulo}, de ${song.artista}`}
          className="aspect-square w-full object-cover"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(song.id)}
          aria-label={
            isFavorite ? `Remover ${song.titulo} dos favoritos` : `Favoritar ${song.titulo}`
          }
          className={`absolute right-3 top-3 rounded-full p-3 shadow-lg transition ${isFavorite ? 'bg-[#FFD900] text-[#0B1E30]' : 'bg-[#0B1E30]/85 text-white hover:bg-[#51AFF7]'}`}
        >
          <FiHeart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#51AFF7]">
            {song.genero} · {song.duracao}
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-[#0B1E30]">{song.titulo}</h2>
          <p className="text-sm font-semibold text-slate-500">
            {song.artista} · {song.album}
          </p>
        </div>
        <p className="text-sm leading-6 text-slate-600">{song.trecho}</p>
        <a
          href={song.letraUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1E30] hover:text-[#51AFF7]"
        >
          Consultar letra <FiExternalLink size={15} />
        </a>
      </div>
    </article>
  );
}
