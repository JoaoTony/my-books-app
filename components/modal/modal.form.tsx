import { FC, useEffect, useState, useCallback } from 'react'
import { useAppContext } from '../../context/app-context'
import { useForm } from 'react-hook-form';
import { yupResolver } from '../../node_modules/@hookform/resolvers/yup';
import { IModalForm } from './modal.types'
import { modalFormAPIRequest, modalFormGetElement } from './modal.utils'

import { schema } from './modal.validation'

import { Form } from './moda.styles'

const ModalForm: FC = () => {
  const { type, handleShowModal, elementID } = useAppContext()
  const [books, setBooks] = useState<IModalForm>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IModalForm, 'id'>>({ resolver: yupResolver(schema) });

  const handleAddAndEditBook = async (values: any) => {
    modalFormAPIRequest(
      handleShowModal, 
      {
        name: values.name || books?.name,
        author: values.author || books?.author,
        image: values.image || books?.image,
        pages: values.pages || books?.pages
      },
      type, 
      elementID
    )
  }

  const handleSetBook = useCallback((newBook?: IModalForm) => {
    setBooks(newBook)
  }, [])

  useEffect(() => {
    modalFormGetElement(handleSetBook, elementID)
  }, [elementID])

 
  return (
    <Form onSubmit={handleSubmit(handleAddAndEditBook)}>
      <label className="label">Insira a url da imagem</label>
      <input 
        type="text" 
        className="input" 
        {...register('image')} 
        defaultValue={type === 'EDIT' ? books?.image : ''}
      />
      {errors.image && <span>{errors.image.message}</span>}

      <label className="label">Insira o titulo do livro</label>
      <input 
        type="text"   
        className="input" 
        {...register('name')} 
        defaultValue={type === 'EDIT' ? books?.name : ''} 
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label className="label">Insira o nome do autor</label>
      <input 
        type="text" 
        className="input" 
        {...register('author')} 
        defaultValue={type === 'EDIT' ? books?.author : ''} 
      />
      {errors.author && <span>{errors.author.message}</span>}

      <label className="label">Insira a quantidade de páginas</label>
      <input 
        type="number" 
        className="input" 
        {...register('pages')} 
        defaultValue={type === 'EDIT' ? books?.pages.toString() : ''} 
      />
      {errors.pages && <span>{errors.pages.message}</span>}

      <button className="button" type="submit">{type === 'ADD' ? 'Adicionar' : 'Editar'}</button>
    </Form>
  )
}

export default ModalForm