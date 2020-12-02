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
  ShoppingCartWrapper,
  ShoppingCartItems,
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
            <ShoppingCartWrapper>
              <ShoppingCartIcon />
              {/*To do: 
               1. display dinamicaly items
               2. show cart items number only if > 0 */}
              <ShoppingCartItems>{2}</ShoppingCartItems>
            </ShoppingCartWrapper>
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
