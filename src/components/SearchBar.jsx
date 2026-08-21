import { FiSearch } from 'react-icons/fi';

export function SearchBar({ value, onChange, placeholder = 'Buscar...' }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">{placeholder}</span>
      <FiSearch
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#51AFF7]"
        size={20}
      />
      <input
        type="search"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#51AFF7]/35 bg-white px-12 py-3 text-[#0B1E30] outline-none transition placeholder:text-slate-400 focus:border-[#51AFF7] focus:ring-2 focus:ring-[#51AFF7]/25 dark:bg-slate-900 dark:text-white"
      />
    </label>
  );
}
