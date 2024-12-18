import * as yup from 'yup';

export const schema = yup.object().shape({
  transaction_date: yup.date()
    .required('A data é obrigatório')
    .min(3, 'A data deve ter pelo menos 3 caracteres'),

  transaction_type: yup.string()
    .required('O tipo é obrigatório')
    .oneOf(['1', '2'], 'Selecione um tipo válido'),

  amount: yup.number(),

  description: yup.string()
    .required('A descrição é obrigatório')
    .min(3, 'A descrição deve ter pelo menos 3 caracteres'),

  sale_id: yup.number()
    .required('A observação é obrigatório')
});