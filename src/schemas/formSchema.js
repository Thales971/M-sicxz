import { z } from 'zod';

export const musicasDisponiveis = [
  {
    id: 'aurora-banda-solar',
    titulo: 'Aurora',
    artista: 'Banda Solar',
    album: 'Horizonte',
    genero: 'pop',
  },
  {
    id: 'midnight-rock-legends',
    titulo: 'Midnight Rock',
    artista: 'Rock Legends',
    album: 'After Dark',
    genero: 'rock',
  },
  {
    id: 'jazz-night-blue-notes',
    titulo: 'Jazz Night',
    artista: 'Blue Notes',
    album: 'Late Sessions',
    genero: 'jazz',
  },
  {
    id: 'electric-dreams-dj-pulse',
    titulo: 'Electric Dreams',
    artista: 'DJ Pulse',
    album: 'Neon Waves',
    genero: 'eletronica',
  },
  {
    id: 'acoustic-soul-maria-silva',
    titulo: 'Acoustic Soul',
    artista: 'Maria Silva',
    album: 'Raizes',
    genero: 'mpb',
  },
  {
    id: 'pop-sensation-the-stars',
    titulo: 'Pop Sensation',
    artista: 'The Stars',
    album: 'Lights On',
    genero: 'pop',
  },
  {
    id: 'psychosocial-slipknot',
    titulo: 'Psychosocial',
    artista: 'Slipknot',
    album: 'All Hope Is Gone',
    genero: 'metal',
  },
  {
    id: 'dualities-slipknot',
    titulo: 'Duality',
    artista: 'Slipknot',
    album: 'Vol. 3: The Subliminal Verses',
    genero: 'metal',
  },
  {
    id: 'lose-yourself-eminem',
    titulo: 'Lose Yourself',
    artista: 'Eminem',
    album: '8 Mile',
    genero: 'hiphop',
  },
  {
    id: 'without-me-eminem',
    titulo: 'Without Me',
    artista: 'Eminem',
    album: 'The Eminem Show',
    genero: 'hiphop',
  },
  {
    id: 'numb-linkin-park',
    titulo: 'Numb',
    artista: 'Linkin Park',
    album: 'Meteora',
    genero: 'rock',
  },
  {
    id: 'nothing-else-matters-metallica',
    titulo: 'Nothing Else Matters',
    artista: 'Metallica',
    album: 'Metallica',
    genero: 'metal',
  },
  {
    id: 'blinding-lights-the-weeknd',
    titulo: 'Blinding Lights',
    artista: 'The Weeknd',
    album: 'After Hours',
    genero: 'pop',
  },
  {
    id: 'bohemian-rhapsody-queen',
    titulo: 'Bohemian Rhapsody',
    artista: 'Queen',
    album: 'A Night at the Opera',
    genero: 'rock',
  },
  {
    id: 'perfect-ed-sheeran',
    titulo: 'Perfect',
    artista: 'Ed Sheeran',
    album: 'Divide',
    genero: 'pop',
  },
];

const generosMusicais = [
  'rock',
  'pop',
  'jazz',
  'eletronica',
  'mpb',
  'sertanejo',
  'hiphop',
  'classica',
  'metal',
];
const musicasIds = musicasDisponiveis.map(({ id }) => id);

export const formSchema = z.object({
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
});
