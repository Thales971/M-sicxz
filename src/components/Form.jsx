import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMusic,
  FiHeart,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
  FiRotateCcw,
  FiSend,
  FiRadio,
  FiMail as FiMailIcon,
} from 'react-icons/fi'
import { formSchema } from '../schemas/formSchema'

export const Form = () => {
  const [submittedData, setSubmittedData] = useState(null)
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
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
  })

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmittedData(data)
    setIsSubmittingSuccess(true)
  }

  const handleReset = () => {
    reset()
    setSubmittedData(null)
    setIsSubmittingSuccess(false)
  }

  // Lista de músicas disponíveis na plataforma
  const musicasDisponiveis = [
    'Aurora - Banda Solar',
    'Midnight Rock - Rock Legends',
    'Jazz Night - Blue Notes',
    'Electric Dreams - DJ Pulse',
    'Acoustic Soul - Maria Silva',
    'Pop Sensation - The Stars',
  ]

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/90 p-8 sm:p-10">
        {/* Título do Formulário */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <FiMusic className="text-[#FFD900] text-3xl sm:text-4xl" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E30] tracking-tight">
            Fale Conosco
          </h1>
        </div>

        {isSubmittingSuccess && submittedData ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-20 h-20 bg-[#FFD900] text-[#0B1E30] rounded-full flex items-center justify-center mx-auto border border-[#FFD900] shadow-sm">
              <FiCheckCircle size={44} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Obrigado pelo seu feedback! Entraremos em contato em breve.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-200 text-sm font-mono text-gray-800 max-h-64 overflow-y-auto">
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="text-sm sm:text-base text-gray-700 space-y-6">
            {/* Grid de 2 Colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {/* === COLUNA 1 === */}
              <div className="space-y-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiUser className="text-[#FFD900]" size={16} />
                    <span>Nome Completo<span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <input
                      {...register('nome')}
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
                    <FiMail className="text-[#FFD900]" size={16} />
                    <span>E-mail<span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <FiMail size={18} />
                    </div>
                    <input
                      {...register('email')}
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
                    <FiPhone className="text-[#FFD900]" size={16} />
                    <span>Telefone / Celular<span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <FiPhone size={18} />
                    </div>
                    <input
                      {...register('telefone')}
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
                    <FiMusic className="text-[#FFD900]" size={16} />
                    <span>Gênero Musical Favorito<span className="text-red-500">*</span></span>
                  </label>
                  <select
                    {...register('generoMusical')}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm sm:text-base text-gray-800 focus:bg-white focus:outline-none transition cursor-pointer ${
                      errors.generoMusical ? 'border-red-500' : 'border-gray-300 focus:border-[#FFD900]'
                    }`}
                  >
                    <option value="">Selecione um gênero</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="eletronica">Eletrônica</option>
                    <option value="mpb">MPB</option>
                    <option value="sertanejo">Sertanejo</option>
                    <option value="hiphop">Hip Hop/Rap</option>
                    <option value="classica">Música Clássica</option>
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
                    <FiHeart className="text-[#FFD900]" size={16} />
                    <span>Música Favorita<span className="text-red-500">*</span></span>
                  </label>
                  <select
                    {...register('musicaFavorita')}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm sm:text-base text-gray-800 focus:bg-white focus:outline-none transition cursor-pointer ${
                      errors.musicaFavorita ? 'border-red-500' : 'border-gray-300 focus:border-[#FFD900]'
                    }`}
                  >
                    <option value="">Selecione uma música</option>
                    {musicasDisponiveis.map((musica) => (
                      <option key={musica} value={musica}>
                        {musica}
                      </option>
                    ))}
                  </select>
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
                    <FiRadio className="text-[#FFD900]" size={16} />
                    <span>Tipo de Contato<span className="text-red-500">*</span></span>
                  </label>
                  <div className="flex flex-col gap-3 py-1">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]">
                      <input
                        {...register('tipoContato')}
                        type="radio"
                        value="duvida"
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#FFD900] cursor-pointer"
                      />
                      <span>Dúvida</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]">
                      <input
                        {...register('tipoContato')}
                        type="radio"
                        value="sugestao"
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#FFD900] cursor-pointer"
                      />
                      <span>Sugestão</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]">
                      <input
                        {...register('tipoContato')}
                        type="radio"
                        value="elogio"
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#FFD900] cursor-pointer"
                      />
                      <span>Elogio</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-[#0B1E30]">
                      <input
                        {...register('tipoContato')}
                        type="radio"
                        value="suporte"
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#FFD900] cursor-pointer"
                      />
                      <span>Suporte Técnico</span>
                    </label>
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
                      className="w-4 h-4 sm:w-5 sm:h-5 accent-[#FFD900] rounded cursor-pointer"
                    />
                    <FiMailIcon className="text-[#FFD900]" size={18} />
                    <span>Desejo receber newsletters e novidades musicais</span>
                  </label>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-semibold text-gray-800 text-xs sm:text-sm">
                    <FiMessageSquare className="text-[#FFD900]" size={16} />
                    <span>Sua Mensagem<span className="text-red-500">*</span></span>
                  </label>
                  <textarea
                    {...register('mensagem')}
                    rows={5}
                    placeholder="Digite sua mensagem, dúvida, sugestão ou elogio..."
                    className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none transition resize-none ${
                      errors.mensagem ? 'border-red-500' : 'border-gray-300 focus:border-[#FFD900]'
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
            <div className="pt-5 border-t border-gray-100 flex items-center justify-end gap-4">
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
                className="px-10 py-3 bg-[#FFD900] hover:bg-[#ffc700] active:scale-[0.98] text-[#0B1E30] font-bold rounded-xl text-sm sm:text-base transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
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
  )
}
