import { FiArrowLeft, FiMusic } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { artistas } from '../data/artists';
import { musicas } from '../data/songs';

export function ArtistDetails() {
  const { artistId } = useParams();
  const artist = artistas.find(item => item.id === artistId);
  const artistSongs = musicas.filter(song => song.artistaId === artistId);

  if (!artist) {
    return (
      <main className="min-h-screen bg-[#0B1E30] px-4 pb-20 pt-32 text-center text-white">
        <h1 className="text-3xl font-black">Artista não encontrado</h1>
        <Link to="/artistas" className="mt-6 inline-flex text-[#51AFF7]">
          Voltar para artistas
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B1E30] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Link
          to="/artistas"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#51AFF7] hover:text-white"
        >
          <FiArrowLeft /> Voltar para artistas
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <img
            src={artist.imagem}
            alt={`Imagem de ${artist.nome}`}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#51AFF7]">
              {artist.genero}
            </p>
            <h1 className="mt-3 text-5xl font-black text-white sm:text-7xl">{artist.nome}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{artist.descricao}</p>
            <div className="mt-8 rounded-2xl border border-[#51AFF7]/25 bg-white/5 p-5 text-slate-200">
              <strong className="text-[#FFD900]">Por onde começar:</strong> ouca {artist.destaque} e
              explore a selecao abaixo.
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="flex items-center gap-3 text-3xl font-black text-white">
            <FiMusic className="text-[#FFD900]" /> Faixas em destaque
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artistSongs.map(song => (
              <a
                key={song.id}
                href={song.letraUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#51AFF7]/25 bg-white p-5 transition hover:-translate-y-1 hover:border-[#51AFF7]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#51AFF7]">
                  {song.album} · {song.duracao}
                </p>
                <h3 className="mt-2 text-xl font-black text-[#0B1E30]">{song.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{song.trecho}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
