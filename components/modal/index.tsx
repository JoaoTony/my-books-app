import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Delete } from '../svg/delet'

import { 
  Container, 
  Content, 
  Background, 
  CloseButton, 
  Title
} from './moda.styles'
import ModalForm from './modal.form'

const Modal: FC<{ showModal: boolean, handleShowModal: () => void }> = ({ showModal, handleShowModal }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container showModal={showModal}>
      <Background />
      <Content showModal={showModal}>
        <CloseButton onClick={() => handleShowModal()}>
          <Delete color={colors.red01}/>
        </CloseButton>
        <Title>Modal</Title>
        <ModalForm />
      </Content>
    </Container>
  )
}

export default Modal