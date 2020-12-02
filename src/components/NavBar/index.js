import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  NavBarContainer,
  NavHeader,
  NavCenter,
  NavButton,
  NavMenuIcon,
  CloseMenuIcon,
  ShoppingCartIcon,
  NavButtonsWrapper,
  NavList,
  NavListItem,
} from './styled'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer>
      <NavCenter>
        <NavHeader>
          <Link to='/'>Speranta Plus Sashimi</Link>
          <NavButtonsWrapper>
            <ShoppingCartIcon />
            <NavButton onClick={handleToggle}>
              {isOpen ? <CloseMenuIcon /> : <NavMenuIcon />}
            </NavButton>
          </NavButtonsWrapper>
        </NavHeader>
        <NavList isOpen={isOpen}>
          <NavListItem>
            <Link to='/about'>Despre noi</Link>
          </NavListItem>
          <NavListItem>
            <Link to='/contact'>Contacte</Link>
          </NavListItem>
        </NavList>
      </NavCenter>
    </NavBarContainer>
  )
}

export default NavBar