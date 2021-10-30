import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useAppContext } from '../../context/app-context'
import { deleteFetcher } from '../../api/fetcher'

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

const BookCard: FC<BookCardProps> = ({ image, pages, name, id }) => {
  const { colors } = useContext(ThemeContext)
  const { handleType, handleShowModal, handleElementID } = useAppContext()

  const handleModal = () => {
    handleShowModal(true)
    handleType('EDIT')
  }

  const handleDelete = async () => {
    console.log('entrei')
    try { 
      const res = await deleteFetcher<any>(`/${id}`);

      console.log(res)
      if(res.status === 200) {
        console.log(res.data)
      }

    } catch (err){
      console.log(err)
    }

  }

  const handleEditInfo = () => {
    handleElementID(id)
    handleModal()
  }

  return (
    <Container>
      <Background00 />
      <Background01 />
      <Image src={image} alt={name + 'image'} />
      <Name>{name}</Name>
      <Pages>{pages} páginas</Pages>

      <Row>
        <EditButton onClick={() => handleEditInfo()}>
          <Edit color={colors.title}/>
        </EditButton>
        <DeletButton onClick={() => handleDelete()}>
          <Delete color={colors.red01}/>
        </DeletButton>
      </Row>
    </Container>
  )
}

export default BookCard