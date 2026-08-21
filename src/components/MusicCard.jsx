import { useState } from 'react';
import { BsPauseFill, BsPlayFill, BsSkipEndFill, BsSkipStartFill } from 'react-icons/bs';

// 1. Adicione as props entre chaves nos parâmetros do componente
export function MusicCard({ titulo, artista, capa }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-80 h-[420px] bg-zinc-900 rounded-xl flex flex-col p-4 justify-between">
      <div className="flex justify-center items-center bg-black h-72 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={capa} alt={titulo} />
      </div>

      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg truncate">{titulo}</h3>
        <p className="text-zinc-400 text-sm font-medium truncate">{artista}</p>
      </div>

      <div className="flex items-center justify-center gap-6 py-2">
        <button
          type="button"
          aria-label="Faixa anterior"
          onClick={() => setIsPlaying(false)}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <BsSkipStartFill className="text-2xl" />
        </button>
        <button
          type="button"
          aria-label={isPlaying ? 'Pausar faixa' : 'Reproduzir faixa'}
          onClick={() => setIsPlaying(current => !current)}
          className="text-white hover:scale-110 transition-transform cursor-pointer"
        >
          {isPlaying ? <BsPauseFill className="text-4xl" /> : <BsPlayFill className="text-4xl" />}
        </button>
        <button
          type="button"
          aria-label="Próxima faixa"
          onClick={() => setIsPlaying(false)}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <BsSkipEndFill className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
