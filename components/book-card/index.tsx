import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useAppContext } from '../../context/app-context'

import { 
  Container, 
  Image, 
  Name, 
  Pages, 
  Background00,
  Background01,
  DeletButton,
  EditButton,
  Row
} from './book-card.styles'

import { Delete } from '../svg/delet'
import { Edit } from '../svg/edit'
import { BookCardProps } from './book-card.types'

const BookCard: FC<BookCardProps> = ({ image, pages, name }) => {
  const { colors } = useContext(ThemeContext)
  const { handleType, handleShowModal } = useAppContext()

  const handleModal = () => {
    handleShowModal(true)
    handleType('EDIT')
  }

  return (
    <Container>
      <Background00 />
      <Background01 />
      <Image src={image} alt={name + 'image'} />
      <Name>{name}</Name>
      <Pages>{pages} páginas</Pages>

      <Row>
        <EditButton onClick={() => handleModal()}>
          <Edit color={colors.title}/>
        </EditButton>
        <DeletButton>
          <Delete color={colors.red01}/>
        </DeletButton>
      </Row>
    </Container>
  )
}

export default BookCard