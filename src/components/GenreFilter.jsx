import { FiFilter } from 'react-icons/fi';

export function GenreFilter({ value, onChange, genres }) {
  return (
    <label className="flex items-center gap-3 text-sm font-semibold text-white">
      <FiFilter className="text-[#FFD900]" size={18} />
      <span className="sr-only">Filtrar por genero</span>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        className="rounded-xl border border-[#51AFF7]/40 bg-[#0B1E30] px-4 py-3 text-white outline-none focus:border-[#51AFF7] focus:ring-2 focus:ring-[#51AFF7]/30"
      >
        {genres.map(genre => (
          <option key={genre.value} value={genre.value}>
            {genre.label}
          </option>
        ))}
      </select>
    </label>
  );
}
