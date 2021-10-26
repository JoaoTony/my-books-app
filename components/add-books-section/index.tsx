import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Container, Text, AddButton, Image } from './add-books-section.styles'

const AddBookSection: FC<{ handleShowModal: () => void }> = ({ handleShowModal }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Text>Minha lista</Text>
      <AddButton onClick={() => handleShowModal()}>
        <Image src={title === 'light' ? './assets/add-book-black.png' : './assets/add-book-white.png' } alt="icon" width={30} height={30} />
      </AddButton>
    </Container>
  )
}

export default AddBookSection