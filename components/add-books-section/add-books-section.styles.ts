import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`

export const Text = styled.p`
  color: ${props => props.theme.colors.title};
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`

export const AddButton = styled.button`
  width: 40px;
  height: 30px;
  border: none !important;
  background-color: transparent;
  cursor: pointer
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`