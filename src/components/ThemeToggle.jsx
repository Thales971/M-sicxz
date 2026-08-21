import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('musicxzz-theme') !== 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('musicxzz-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark(current => !current)}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="rounded-lg border border-[#0B1E30]/20 p-3 text-[#0B1E30] transition hover:border-[#51AFF7] hover:bg-[#51AFF7]/15 dark:border-white/20 dark:text-white"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
