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
];

// Duplicamos a lista para criar o loop infinito contínuo
const musicasInfinitas = [...musicas, ...musicas];

export function Hero() {
    return (
        <main
            id="inicio"
            className="relative w-full min-h-screen flex flex-col justify-start items-start px-8 md:px-16 pt-32 pb-16 overflow-hidden">
            
            {/* CSS da Animação do Carrossel */}
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

            <div className="w-full max-w-4xl py-15 relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-5">
                    <div className="flex flex-col justify-center py-10">
                        <p className="text-lg font-semibold text-white">Melhores faixas</p>
                        <h1 className="text-3xl md:text-5xl py-2.5 font-extrabold text-white uppercase tracking-tight">
                            MUSICAS EM ALTA
                        </h1>

                        <div className="gap-4 flex justify-start items-center pt-4">
                            <button className="bg-[#51AFF7] hover:bg-blue-400 px-6 py-3 rounded-3xl font-semibold text-black transition-colors cursor-pointer shadow-[0_0_15px_rgba(81,175,247,0.4)]">
                                Veja todas
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container do Carrossel */}
            <div className="w-full overflow-hidden relative py-4">
                <div className="animate-carousel gap-6">
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