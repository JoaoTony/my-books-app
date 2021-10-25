import { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Header as Container, Logo, CustomSwitch } from './header.styles'
import { HeaderProps } from './header.types'

const Header: FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  
  return (
    <Container>
      <Logo>MyBooks</Logo>
      <CustomSwitch 
        onChange={toggleTheme} 
        checked ={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false} 
        width={50}
        height={15}
        handleDiameter={35}
        onHandleColor={colors.title}
        offHandleColor={colors.title}
        offColor={colors.title}
        onColor={colors.title}
      />
    </Container>
)}

export default Header