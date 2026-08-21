import { useMemo, useState } from 'react';
import { FiHeadphones, FiHeart } from 'react-icons/fi';
import { GenreFilter } from '../components/GenreFilter';
import { SearchBar } from '../components/SearchBar';
import { SongCard } from '../components/SongCard';
import { generos } from '../data/genres';
import { musicas } from '../data/songs';

export function Songs() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('todos');
  const [favorites, setFavorites] = useState([]);

  const filteredSongs = useMemo(
    () =>
      musicas.filter(song => {
        const matchesSearch = `${song.titulo} ${song.artista} ${song.album}`
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesGenre = genre === 'todos' || song.genero === genre;
        return matchesSearch && matchesGenre;
      }),
    [genre, search]
  );

  const toggleFavorite = songId => {
    setFavorites(current =>
      current.includes(songId) ? current.filter(id => id !== songId) : [...current, songId]
    );
  };

  return (
    <main className="min-h-screen bg-[#0B1E30] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#51AFF7]">
            <FiHeadphones /> Biblioteca de faixas
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Encontre sua próxima música.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Pesquise por faixa, artista ou álbum, filtre por genero e guarde suas descobertas
            favoritas.
          </p>
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-[#51AFF7]/25 bg-black/20 p-4 sm:grid-cols-[1fr_auto] sm:p-5">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar faixa, artista ou album"
          />
          <GenreFilter value={genre} onChange={setGenre} genres={generos} />
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
          <FiHeart className="text-[#FFD900]" /> {favorites.length} favorita(s)
        </div>
        {filteredSongs.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSongs.map(song => (
              <SongCard
                key={song.id}
                song={song}
                isFavorite={favorites.includes(song.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-[#51AFF7]/25 bg-white/5 p-8 text-center text-slate-300">
            Nenhuma música encontrada. Tente outro termo ou genero.
          </p>
        )}
      </section>
    </main>
  );
}
