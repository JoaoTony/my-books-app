import styled from 'styled-components'

export const Container = styled.div<{ showModal: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${props => props.showModal ? 20 : -1};
  transition: all 0.3s ease;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${props => props.theme.colors.background};
  opacity: 0.7;
  overflow: hidden;
`

export const Content = styled.div<{ showModal: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${props => props.theme.colors.background};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 18px;
  transform: ${props => props.showModal ? 'translateY(0)' : 'translateY(-100vh)'};
  transition: all 0.5s ease;
  padding: 30px 60px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
  font-family: Poppins;
  color: ${props => props.theme.colors.title};
  margin-top: 10px;
  margin-bottom: 15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

 .label {
    font-size: 16px;
    color: ${props => props.theme.colors.title};
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .input {
    width: 300px;
    height: 50px;
    border-radius: 8px;
    background: ${props => props.theme.colors.input01};
    border: none;
    font-size: 15px;
    padding: 0 10px;
    font-family: Poppins;
    color: ${props => props.theme.colors.title};
    outline: none;
  }

  .button {
    width: 300px;
    height: 50px;
    border: none; 
    border-radius: 8px;
    background: ${props => props.theme.colors.button01};
    color: ${props => props.theme.colors.background};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 40px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: -15px;
  margin-right: -45px;
  margin-bottom: 20px;

  svg{ 
    width: 20px !important;
    height: 20px !important;
  }
`