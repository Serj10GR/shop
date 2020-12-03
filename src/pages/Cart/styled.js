import styled from 'styled-components'

import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa'
import { AiFillPlusCircle } from 'react-icons/ai'

export const CartWrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
`
export const CartTitle = styled.h1`
  text-align: center;
  margin-top: 1em;
  letter-spacing: 3px;
`
export const CartInner = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CartText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const EmptyCartIcon = styled(FaCartArrowDown)`
  font-size: 4rem;
  color: red;
`
export const FullCartIcon = styled(FaShoppingCart)`
  font-size: 4rem;
  color: orange;
`
export const ActionIcon = styled(AiFillPlusCircle)`
  font-size: 2rem;
  color: orange;
  margin-left: 0.4em;
`
export const CartItems = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
