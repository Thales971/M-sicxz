import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiHeart,
  FiMail,
  FiMail as FiMailIcon,
  FiMessageSquare,
  FiMusic,
  FiPhone,
  FiRadio,
  FiRotateCcw,
  FiSend,
  FiUser,
} from 'react-icons/fi';
import { generos } from '../data/genres';
import { formSchema, musicasDisponiveis } from '../schemas/formSchema';

export const Form = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      generoMusical: '',
      musicaFavorita: '',
      tipoContato: '',
      newsletter: false,
      mensagem: '',
    },
  });

  const onSubmit = async data => {
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmittedData(data);
    setIsSubmittingSuccess(true);
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
    setIsSubmittingSuccess(false);
  };

  const generoSelecionado = useWatch({ control, name: 'generoMusical' });
  const musicaSelecionadaId = useWatch({ control, name: 'musicaFavorita' });
  const faixasExibidas = generoSelecionado
    ? musicasDisponiveis.filter(({ genero }) => genero === generoSelecionado)
    : musicasDisponiveis;
  const musicaSelecionada = musicasDisponiveis.find(({ id }) => id === musicaSelecionadaId);
  const tiposDeContato = [
    { value: 'duvida', label: 'Dúvida' },
    { value: 'sugestao', label: 'Sugestão' },
    { value: 'elogio', label: 'Elogio' },
    { value: 'suporte', label: 'Suporte Técnico' },
  ];

  useEffect(() => {
    if (musicaSelecionada && generoSelecionado !== musicaSelecionada.genero) {
      setValue('musicaFavorita', '', { shouldValidate: true });
    }
  }, [generoSelecionado, musicaSelecionada, setValue]);

  return (
    <div className="w-full max-w-295 mx-auto px-4 py-8">
      <div className="rounded-3xl border border-[#51AFF7]/35 bg-white p-5 shadow-2xl transition-colors dark:bg-slate-900 sm:p-10">
        {/* Título do Formulário */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <FiMusic className="text-[#51AFF7] text-3xl sm:text-4xl" />
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1E30] dark:text-white sm:text-4xl">
            Descubra Seu Artista Favorito
          </h1>
        </div>
        <p className="mx-auto mb-8 max-w-2xl text-center text-[#0B1E30]/70 dark:text-slate-300">
          Conte um pouco sobre seus gostos musicais e encontre a banda ou o artista que combina com
          você.
        </p>

        {isSubmittingSuccess && submittedData ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-20 h-20 bg-[#FFD900] text-[#0B1E30] rounded-full flex items-center justify-center mx-auto border border-[#FFD900] shadow-sm">
              <FiCheckCircle size={44} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-sm text-gray-500 dark:text-slate-300 sm:text-base">
              Obrigado pelo seu feedback! Entraremos em contato em breve.
            </p>

            <div className="max-h-64 overflow-y-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left font-mono text-sm text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </div>

            <button
              onClick={handleReset}
              type="button"
              className="px-10 py-3.5 bg-[#0B1E30] hover:bg-[#1a3a52] text-white font-semibold rounded-xl transition cursor-pointer inline-flex items-center justify-center gap-2 text-base shadow-md"
            >
              <FiRotateCcw size={20} /> Enviar Nova Mensagem
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 text-sm text-gray-700 dark:text-slate-200 sm:text-base"
          >
            {/* Grid de 2 Colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {/* === COLUNA 1 === */}
              <div className="space-y-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiUser className="text-[#51AFF7]" size={16} />
                    <span>
                      Nome Completo<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      {...register('nome')}
                      id="nome"
                      type="text"
                      placeholder="Digite seu nome"
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none transition ${
                        errors.nome
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-gray-300 focus:border-[#FFD900] focus:ring-2 focus:ring-[#FFD900]/20'
                      }`}
                    />
                  </div>
                  {errors.nome && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.nome.message}</span>
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiMail className="text-[#51AFF7]" size={16} />
                    <span>
                      E-mail<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <FiMail size={18} />
                    </div>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder="exemplo@email.com"
                      className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none transition ${
                        errors.email
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-gray-300 focus:border-[#FFD900] focus:ring-2 focus:ring-[#FFD900]/20'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiPhone className="text-[#51AFF7]" size={16} />
                    <span>
                      Telefone / Celular<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <FiPhone size={18} />
                    </div>
                    <input
                      {...register('telefone')}
                      id="telefone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none transition ${
                        errors.telefone
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-gray-300 focus:border-[#FFD900] focus:ring-2 focus:ring-[#FFD900]/20'
                      }`}
                    />
                  </div>
                  {errors.telefone && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.telefone.message}</span>
                    </p>
                  )}
                </div>

                {/* Gênero Musical */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiMusic className="text-[#51AFF7]" size={16} />
                    <span>
                      Gênero Musical Favorito<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    {...register('generoMusical')}
                    id="generoMusical"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border rounded-xl text-sm sm:text-base text-gray-800 dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:outline-none transition cursor-pointer ${
                      errors.generoMusical
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#FFD900]'
                    }`}
                  >
                    <option value="">Selecione um gênero</option>
                    {generos
                      .filter(({ value }) => value !== 'todos')
                      .map(genero => (
                        <option key={genero.value} value={genero.value}>
                          {genero.label}
                        </option>
                      ))}
                  </select>
                  {errors.generoMusical && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.generoMusical.message}</span>
                    </p>
                  )}
                </div>

                {/* Música Favorita */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiHeart className="text-[#51AFF7]" size={16} />
                    <span>
                      Música Favorita<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    {...register('musicaFavorita')}
                    id="musicaFavorita"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border rounded-xl text-sm sm:text-base text-gray-800 dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:outline-none transition cursor-pointer ${
                      errors.musicaFavorita
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#FFD900]'
                    }`}
                  >
                    <option value="">Selecione uma música</option>
                    {faixasExibidas.map(musica => (
                      <option key={musica.id} value={musica.id}>
                        {musica.titulo} - {musica.artista} ({musica.album})
                      </option>
                    ))}
                  </select>
                  {musicaSelecionada && (
                    <p className="text-xs text-gray-500 mt-1">
                      Artista: <strong>{musicaSelecionada.artista}</strong> | Álbum:{' '}
                      <strong>{musicaSelecionada.album}</strong>
                    </p>
                  )}
                  {errors.musicaFavorita && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.musicaFavorita.message}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* === COLUNA 2 === */}
              <div className="space-y-4">
                {/* Tipo de Contato */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiRadio className="text-[#51AFF7]" size={16} />
                    <span>
                      Tipo de Contato<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex flex-col gap-3 py-1">
                    {tiposDeContato.map(tipo => (
                      <label
                        key={tipo.value}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]"
                      >
                        <input
                          {...register('tipoContato')}
                          type="radio"
                          value={tipo.value}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-[#51AFF7] cursor-pointer"
                        />
                        <span>{tipo.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.tipoContato && (
                    <p className="flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.tipoContato.message}</span>
                    </p>
                  )}
                </div>

                {/* Newsletter */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]">
                    <input
                      {...register('newsletter')}
                      type="checkbox"
                      className="w-4 h-4 sm:w-5 sm:h-5 accent-[#51AFF7] rounded cursor-pointer"
                    />
                    <FiMailIcon className="text-[#51AFF7]" size={18} />
                    <span>Desejo receber newsletters e novidades musicais</span>
                  </label>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiMessageSquare className="text-[#51AFF7]" size={16} />
                    <span>
                      Sua Mensagem<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <textarea
                    {...register('mensagem')}
                    rows={5}
                    placeholder="Digite sua mensagem, dúvida, sugestão ou elogio..."
                    id="mensagem"
                    className={`w-full resize-none rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 transition focus:outline-none dark:bg-slate-800 dark:text-white sm:text-base ${
                      errors.mensagem ? 'border-red-500' : 'border-gray-300 focus:border-[#51AFF7]'
                    }`}
                  />
                  {errors.mensagem && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <FiAlertCircle size={14} className="shrink-0" />
                      <span>{errors.mensagem.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Rodapé: Botões Submit OR Reset */}
            <div className="flex flex-col-reverse items-stretch justify-end gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl text-sm sm:text-base transition cursor-pointer flex items-center justify-center gap-2"
              >
                <FiRotateCcw size={18} /> Limpar
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 bg-[#51AFF7] hover:bg-[#4196e0] active:scale-[0.98] text-[#0B1E30] font-bold rounded-xl text-sm sm:text-base transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FiSend size={18} /> Enviar Mensagem
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
