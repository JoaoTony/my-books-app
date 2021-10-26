import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Delete } from '../svg/delet'
import { useAppContext } from '../../context/app-context'

import { 
  Container, 
  Content, 
  Background, 
  CloseButton, 
  Title
} from './moda.styles'
import ModalForm from './modal.form'

const Modal: FC = () => {
  const { colors } = useContext(ThemeContext)
  const { showModal, handleShowModal, type } = useAppContext()

  return (
    <Container showModal={showModal}>
      <Background />
      <Content showModal={showModal}>
        <CloseButton onClick={() => handleShowModal(false)}>
          <Delete color={colors.red01}/>
        </CloseButton>
        <Title>{type === 'ADD' ? 'Adicionar Livro' : 'Editar Livro'}</Title>
        <ModalForm />
      </Content>
    </Container>
  )
}

export default Modal