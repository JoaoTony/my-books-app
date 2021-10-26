import { FC, useContext, createContext, useState, useCallback } from 'react'
import { AppContextProps, InitialState } from './app-context.types'

const AppContext = createContext(InitialState)

const AppContextProvider: FC = props => {
  const { children } = props
  const [modal, setShowModal] = useState(InitialState.showModal)
  const [type, setModalType] = useState(InitialState.type)

  const handleShowModal = useCallback((show: boolean) => {
    setShowModal(show)
  },[])

  const handleType = useCallback((changeType: 'EDIT' | 'ADD' | 'INFO') => {
    setModalType(changeType)
  },[])

  return (
    <AppContext.Provider value={{ showModal: modal, type, handleShowModal, handleType }}>
      {children}
    </AppContext.Provider>
  )
};

const useAppContext = () => useContext(AppContext) as AppContextProps;

export {
  AppContextProvider,
  useAppContext,
}