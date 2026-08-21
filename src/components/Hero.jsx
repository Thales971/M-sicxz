import { Link } from 'react-router-dom';
import { MusicCard } from './MusicCard';

const musicas = [
     {
        id: 1,
        titulo: 'Poesia acustica 7',
        artista: 'MC Hariel, Negra Li, Ducon, MC Kevin o Chris, Chris MC, Matuê, DK 47, Vitão',
        capa: 'https://akamai.sscdn.co/uploadfile/letras/albuns/4/a/4/f/2466521734384556.jpg',
    },
    {
        id: 2,
        titulo: 'Be quiet and drive',
        artista: 'Deftones',
        capa: 'https://cdn-images.dzcdn.net/images/cover/b0edd62e4e62455aef58a3e60474e2bb/1900x1900-000000-80-0-0.jpg',
    },
    {
        id: 3,
        titulo: 'So far so fake',
        artista: 'Pierce the veil',
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquXGwY3PS3n1594zxKdB097DEAs7izphJSvjE1M7RrOly_xKICgt9EKQ&s=10',
    },
    {
        id: 4,
        titulo: 'Enter sandman',
        artista: 'Metallica',
        capa: 'https://cdn-images.dzcdn.net/images/cover/a0ddc4a4ad631066dbb94855e7a18879/1900x1900-000000-81-0-0.jpg',
    },
    {
        id: 5,
        titulo: 'Sweet Child O Mine',
        artista: 'Guns and roses',
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_m4OnEV2FlIAVGY7i71RaDE6O13RSCCMGcHuEo_hcJDzDefT87lOCII&s=10',
    },
    {
        id: 6,
        titulo: 'Céu azul',
        artista: 'Charlie Brown Jr',
        capa: 'https://akamai.sscdn.co/uploadfile/letras/fotos/5/c/c/0/5cc028230a4ebb459793d9c75caf9fb5.jpg',
    },
    {
        id: 7,
        titulo: 'Tipo Madara',
        artista: 'MHrap',
        capa: 'https://i.ytimg.com/vi/wCMzj9Gzyt0/maxresdefault.jpg',
    },
];

// Duplicamos a lista para criar o loop infinito contínuo
const musicasInfinitas = [...musicas, ...musicas];

export function Hero() {
  return (
    <main
      id="inicio"
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden px-4 pb-16 pt-28 sm:px-8 md:px-16 md:pt-32"
    >
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          display: flex;
          width: max-content;
          animation: carousel 25s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl py-10 sm:py-15">
        <div className="flex flex-col items-start gap-6 px-1 sm:px-5">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white">Melhores faixas</p>
            <h1 className="py-2.5 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              MÚSICAS EM ALTA
            </h1>
            <div className="flex items-center justify-start gap-4 pt-4">
              <Link
                to="/musicas"
                className="rounded-3xl bg-[#51AFF7] px-6 py-3 font-semibold text-black shadow-[0_0_15px_rgba(81,175,247,0.4)] transition-colors hover:bg-[#4196E0]"
              >
                Veja todas
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-carousel gap-4 sm:gap-6">
          {musicasInfinitas.map((musica, index) => (
            <MusicCard
              key={`${musica.id}-${index}`}
              titulo={musica.titulo}
              artista={musica.artista}
              capa={musica.capa}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
