import { FC } from 'react';

import { Container } from './book-list.styles'
import { useRequestSWR } from '../../api/useSwr';
import { BookCardProps } from '../book-card/book-card.types'

import BookCard from '../book-card';

const BookList: FC = () => {
  const { data, error} = useRequestSWR<Array<BookCardProps>>('')

  return (
    <Container>
      {data?.map(item => (
        <BookCard 
          key={item.id} 
          image={item.image} 
          name={item.name} 
          pages={item.pages} 
          author={item.author}  
          id={item.id} 
        />
        ))
      }
    </Container>
  )
}

export default BookList