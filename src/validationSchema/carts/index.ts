import * as yup from 'yup';

export const cartValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
