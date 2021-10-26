import { FC } from 'react'
import { useAppContext } from '../../context/app-context'

import { Form } from './moda.styles'

const ModalForm: FC = () => {
  const { type } = useAppContext()

  const handleSubmit = (e: any) => {
    e.preventDefault();
      //console.log(e)
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

      <button className="button" type="submit">{type === 'ADD' ? 'Adicionar' : 'Editar'}</button>
    </Form>
  )
}

export default ModalForm