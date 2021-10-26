import { FC } from 'react'

import { Form } from './moda.styles'

const ModalForm: FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
      console.log(e)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <label className="label">Insira a url da imagem</label>
      <input type="text" className="input" name="image" />

      <label className="label">Insira o titulo do livro</label>
      <input type="text" className="input" name="name" />

      <label className="label">Insira o nome do autor</label>
      <input type="text" className="input" name="author" />

      <label className="label">Insira a quantidade de páginas</label>
      <input type="text" className="input" name="pages" />

      <button className="button" type="submit">Cadastrar</button>
    </Form>
  )
}

export default ModalForm