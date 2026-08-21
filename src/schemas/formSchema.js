import { z } from 'zod'

export const formSchema = z.object({
  // 1. Nome completo
  nome: z
    .string()
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
    .nonempty('O número de telefone é obrigatório')
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Formato inválido. Ex: (11) 98765-4321'),

  // 4. Gênero Musical Favorito (Select)
  generoMusical: z
    .string()
    .nonempty('Por favor, selecione um gênero musical'),

  // 5. Música Favorita da Plataforma
  musicaFavorita: z
    .string()
    .nonempty('Selecione sua música favorita'),

  // 6. Tipo de Contato (Radio button)
  tipoContato: z.enum(['duvida', 'sugestao', 'elogio', 'suporte'], {
    error: 'Por favor, selecione o tipo de contato',
  }),

  // 7. Newsletter (Checkbox boolean)
  newsletter: z.boolean().default(false),

  // 8. Mensagem/Feedback (Textarea)
  mensagem: z
    .string()
    .nonempty('A mensagem é obrigatória')
    .min(10, 'A mensagem deve ter no mínimo 10 caracteres')
    .max(500, 'Máximo de 500 caracteres'),
})
