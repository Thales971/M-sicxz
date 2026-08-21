import { z } from 'zod';
import { musicas } from '../data/songs.js';

export const musicasDisponiveis = musicas;

const generosMusicais = [
  'rock',
  'pop',
  'jazz',
  'eletronica',
  'mpb',
  'sertanejo',
  'hiphop',
  'rap',
  'classica',
  'metal',
];
const musicasIds = musicasDisponiveis.map(({ id }) => id);

export const formSchema = z
  .object({
    // 1. Nome completo
    nome: z
      .string()
      .trim()
      .nonempty('O nome é obrigatório')
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .max(100, 'Máximo de 100 caracteres')
      .regex(/^[A-Za-zÀ-ÖØ-öÿ\s]+$/, 'O nome deve conter apenas letras'),

    // 2. Validação de E-mail
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Informe um endereço de e-mail válido')
      .toLowerCase(),

    // 3. Validação de Telefone / Celular
    telefone: z
      .string()
      .trim()
      .nonempty('O número de telefone é obrigatório')
      .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Formato inválido. Ex: (11) 98765-4321'),

    // 4. Gênero Musical Favorito (Select)
    generoMusical: z.enum(generosMusicais, {
      error: 'Por favor, selecione um gênero musical válido',
    }),

    // 5. Música Favorita da Plataforma
    musicaFavorita: z
      .string()
      .trim()
      .nonempty('Selecione sua música favorita')
      .refine(value => musicasIds.includes(value), 'Selecione uma música válida'),

    // 6. Tipo de Contato (Radio button)
    tipoContato: z.enum(['duvida', 'sugestao', 'elogio', 'suporte'], {
      error: 'Por favor, selecione o tipo de contato',
    }),

    // 7. Newsletter (Checkbox boolean)
    newsletter: z.boolean().default(false),

    // 8. Mensagem/Feedback (Textarea)
    mensagem: z
      .string()
      .trim()
      .nonempty('A mensagem é obrigatória')
      .min(10, 'A mensagem deve ter no mínimo 10 caracteres')
      .max(500, 'Máximo de 500 caracteres'),
  })
  .superRefine((data, context) => {
    const musica = musicasDisponiveis.find(({ id }) => id === data.musicaFavorita);
    if (musica && musica.genero !== data.generoMusical) {
      context.addIssue({
        code: 'custom',
        path: ['musicaFavorita'],
        message: 'Escolha uma música do gênero selecionado',
      });
    }
  });
