export interface AppContextProps {
  showModal: boolean;
  handleShowModal: (show: boolean) => void;
  type: 'EDIT' | 'ADD' | 'INFO';
  handleType: (changeType: 'EDIT' | 'ADD' | 'INFO') => void;
}

export const InitialState: AppContextProps = {
  showModal: false,
  handleShowModal: () => {},
  type: 'EDIT',
  handleType: () => {}
}