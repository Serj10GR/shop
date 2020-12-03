import { Fragment } from 'react'

import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'

import {
  CartWrapper,
  CartTitle,
  CartText,
  CartInner,
  EmptyCartIcon,
  ActionIcon,
  CartItems,
  FullCartIcon } from './styled'

  
const Cart = () => {
  const isEmpty = true;
  return (
    <CartWrapper>
      <CartTitle>Your Cart</CartTitle>
      <CartInner>
        {
          isEmpty
             ? <Fragment>
                <EmptyCartIcon />
                <CartText>Nu ai nimic în coș</CartText>
                <CartText>
                  Adaugă ceva!
                    <Link to='/'>
                      <ActionIcon /> 
                    </Link>          
                </CartText>
               </Fragment>              
            : <Fragment>
                <FullCartIcon />
                <CartItems>
                 <CartItem />
                </CartItems>
            </Fragment>
        }

      </CartInner>
      
    </CartWrapper>
  )
}

export default Cart
