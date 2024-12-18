import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup.string()
    .required('O nome de usuário é obrigatório')
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres')
    .max(20, 'O nome de usuário deve ter no máximo 20 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/, 'O nome de usuário pode conter apenas letras, números e underscores (_)'),

  password: yup.string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[\W_]/, 'A senha deve conter pelo menos um caractere especial (ex: @, #, $, etc.)'),
});
