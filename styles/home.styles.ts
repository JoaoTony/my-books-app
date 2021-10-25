import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};

  transition: all ease-in 0.5s;
`