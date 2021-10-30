import { useState, useCallback, FC } from 'react'
import { AppContainer } from './home.styles'

import Header from '../../components/header'
import BookList from '../../components/book-list'
import AddBookSection from '../../components/add-books-section'
import Modal from '../../components/modal'
import { useAppContext } from '../../context/app-context'


const HomePage: FC<{toggleTheme: () => void }> = ({ toggleTheme }) => {
  const { showModal } = useAppContext()
  
  return (
    <AppContainer>
      <Header toggleTheme={toggleTheme}/>

      <AddBookSection />
      
      <BookList />
      
      {showModal && <Modal />}

    </AppContainer>       
  )
}

export default HomePage
