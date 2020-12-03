import { Fragment } from 'react'

import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'

import {
  CartContainer,
  CartWrapper,
  CartHeader,
  CartTitle,
  TotalPrice,
  CartContent,
  CartText,
  EmptyCartIcon,
  ActionIcon,
   } from './styled'

{/* {cart.line_items.map(item => <CartItem /> )} */ }
const Cart = ({cart}) => {
  const isEmpty = true
  return (
    <CartContainer>
      <CartWrapper>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
          {
            !isEmpty
            &&
            <TotalPrice>129 <span>MDL</span></TotalPrice>
          }
          
        </CartHeader>
        <CartContent isEmptyCart={isEmpty}>
          {
            isEmpty
             ? <Fragment>
               <EmptyCartIcon />
               <CartText>Coșul tău e gol</CartText>
                <CartText>
                  Adaugă ceva gustos
                  <Link to='/'>
                    <ActionIcon />
                  </Link> 
                </CartText>
             </Fragment>
             : null
          }
        </CartContent>

      </CartWrapper>
    </CartContainer>

    
    
              
  )
}

export default Cart
