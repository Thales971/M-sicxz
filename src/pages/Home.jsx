import { FiArrowRight, FiHeadphones, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white px-4 py-16 text-[#0B1E30] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Link
            to="/artistas"
            className="group rounded-2xl border border-[#51AFF7]/30 bg-[#0B1E30] p-8 text-white transition hover:-translate-y-1 hover:border-[#51AFF7]"
          >
            <FiUsers className="text-[#FFD900]" size={28} />
            <h2 className="mt-6 text-3xl font-black">Conheca os artistas</h2>
            <p className="mt-3 text-slate-300">
              Historias, estilos e faixas para encontrar novas referencias.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#51AFF7]">
              Explorar artistas <FiArrowRight className="transition group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            to="/musicas"
            className="group rounded-2xl border border-[#51AFF7]/30 bg-[#51AFF7]/10 p-8 transition hover:-translate-y-1 hover:border-[#51AFF7]"
          >
            <FiHeadphones className="text-[#0B1E30]" size={28} />
            <h2 className="mt-6 text-3xl font-black">Descubra músicas</h2>
            <p className="mt-3 text-slate-600">
              Busque por faixa, filtre por genero e monte sua lista de favoritas.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#0B1E30]">
              Abrir biblioteca <FiArrowRight className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
