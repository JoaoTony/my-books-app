export interface AppContextProps {
  showModal: boolean;
  elementID: string;
  handleShowModal: (show: boolean) => void;
  type: 'EDIT' | 'ADD' | 'INFO';
  handleType: (changeType: 'EDIT' | 'ADD' | 'INFO') => void;
  handleElementID: (newID: string) => void
}

export const InitialState: AppContextProps = {
  showModal: false,
  elementID: '',
  handleShowModal: () => {},
  type: 'EDIT',
  handleType: () => {},
  handleElementID: () => {}
}