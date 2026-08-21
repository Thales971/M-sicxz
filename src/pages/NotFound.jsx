import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-32 text-center text-[#0B1E30] dark:bg-[#0B1E30] dark:text-white">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#51AFF7]">Erro 404</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">Essa faixa não existe.</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600 dark:text-slate-300">
          A página que você procurou não está no catálogo da Musicxzz.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FFD900] px-5 py-3 font-bold text-[#0B1E30] hover:bg-[#51AFF7]"
        >
          <FiArrowLeft /> Voltar ao início
        </Link>
      </div>
    </main>
  );
}
