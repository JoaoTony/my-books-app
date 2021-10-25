import styled from 'styled-components'

import Switch from 'react-switch'
import { colors } from '../../utils/colors' 

export const Header = styled.header`
  width: 70%;
  height: 100px;
  background-color: transparent;
  align-self: center;
  border-bottom: 1px solid ${colors.gray03};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.p`
  font-size: 2rem;
  font-weight: 900;
  color: ${props => props.theme.colors.title};
`

export const CustomSwitch = styled(Switch)`

`