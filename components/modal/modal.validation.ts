import * as yup from 'yup';

export const schema = yup.object().shape({
  image: yup.string().required('Este campo é obrigatório!'),
  name: yup.string().required('Este campo é obrigatório!'),
  author: yup.string().required('Este campo é obrigatório!'),
  pages: yup.string().required('Este campo é obrigatório!'),
});