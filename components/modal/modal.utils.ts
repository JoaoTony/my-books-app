import { IModalForm } from './modal.types'
import { postFetcher, getFetcher, putFetcher } from '../../api/fetcher'

export const modalFormAPIRequest = async (handleShowModal: (_: boolean) => void, object: Omit<IModalForm, 'id'>, type: string, elementID: string) => {

  if(type === 'EDIT') {
    try {
      const editResponse = await putFetcher<any>(`/${elementID}`, object)

      if(editResponse.status === 200) {
        handleShowModal(false)
      }

    }catch (err) {
      console.log(err)
    }
  }else {
    try { 
      const res = await postFetcher<any>('', object);
      
      console.log(res)
      if(res.status === 201) {
        handleShowModal(false)
      }
      
    } catch (err){
      console.log(err)
    }
  }
}

export const modalFormGetElement = async (setBook: (newBook?: IModalForm) => void, elementID: string) => {
  try {
    const response = await getFetcher<Array<IModalForm>>('')

    if(response.status === 200) {
      setBook(response.data.find(item => item.id === elementID))
    }
  }catch (err) {}
}