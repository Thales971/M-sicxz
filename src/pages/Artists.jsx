import { useMemo, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { ArtistCard } from '../components/ArtistCard';
import { GenreFilter } from '../components/GenreFilter';
import { SearchBar } from '../components/SearchBar';
import { artistas } from '../data/artists';
import { generos } from '../data/genres';

export function Artists() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('todos');

  const filteredArtists = useMemo(
    () =>
      artistas.filter(artist => {
        const matchesSearch = `${artist.nome} ${artist.genero}`
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesGenre = genre === 'todos' || artist.genero === genre;
        return matchesSearch && matchesGenre;
      }),
    [genre, search]
  );

  return (
    <main className="min-h-screen bg-[#0B1E30] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#51AFF7]">
            <FiUsers /> Curadoria Musicxzz
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Artistas que deixam marca.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Conheca historias, estilos e faixas essenciais de nomes que movimentam a plataforma.
          </p>
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-[#51AFF7]/25 bg-black/20 p-4 sm:grid-cols-[1fr_auto] sm:p-5">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar artista ou genero" />
          <GenreFilter value={genre} onChange={setGenre} genres={generos} />
        </div>
        {filteredArtists.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-[#51AFF7]/25 bg-white/5 p-8 text-center text-slate-300">
            Nenhum artista encontrado. Tente outro termo ou genero.
          </p>
        )}
      </section>
    </main>
  );
}
