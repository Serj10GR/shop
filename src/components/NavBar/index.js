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

const NavBar = ({cart}) => {
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
               {cart.total_items > 0
                && <ShoppingCartItems>{cart.total_items}</ShoppingCartItems>
               }
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
