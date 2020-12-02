import styled from 'styled-components'

import { MdRestaurantMenu, MdClose, MdShoppingCart } from 'react-icons/md'

export const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background: #f7f7f7;
  z-index: 1;
`

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`
export const NavCenter = styled.div`
  @media (min-width: 768px) {
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
  }
`

export const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavMenuIcon = styled(MdRestaurantMenu)`
  font-size: 1.5rem;
  color: #af9a7d;
`
export const CloseMenuIcon = styled(MdClose)`
  font-size: 1.5rem;
  color: #af9a7d;
`
export const ShoppingCartIcon = styled(MdShoppingCart)`
  font-size: 2rem;
  color: #F5A623;
  margin-right: 20px;

  @media (min-width: 768px) {
    position: absolute;
    right: 210px;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0;
  }
`
export const NavButtonsWrapper = styled.div`
  display: flex;
`

export const NavList = styled.ul`
  height: ${(props) => (props.isOpen ? '100px' : '0')};
  overflow: hidden;
  transition: all 0.3s linear;
  list-style-type: none;
  background: #f7f7f7;

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
`
export const NavListItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: #222;
    transition: all 0.3s linear;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    border-bottom: 2px solid transparent;

    @media (min-width: 768px) {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }

  a:hover {
    color: #F5A623;
    border-bottom: 2px solid #F5A623;
  }
`