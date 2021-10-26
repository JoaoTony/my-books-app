import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useAppContext } from '../../context/app-context'

import { Container, Text, AddButton, Image } from './add-books-section.styles'

const AddBookSection: FC = () => {
  const { title } = useContext(ThemeContext)
  const { showModal, handleShowModal, handleType } = useAppContext()

  const handleModal = () => {
    handleShowModal(true)
    handleType('ADD')
  }

  return (
    <Container>
      <Text>Minha lista</Text>
      <AddButton onClick={() => handleModal()}>
        <Image src={title === 'light' ? './assets/add-book-black.png' : './assets/add-book-white.png' } alt="icon" />
      </AddButton>
    </Container>
  )
}

export default AddBookSection