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


const Cart = ({cart}) => {
  const isEmpty = false;
  console.log(cart.line_items)
  
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
             : <Fragment>
                 {cart.line_items.map(item => <CartItem key={item.id} {...item}/>)}
             </Fragment>
          }
        </CartContent>

      </CartWrapper>
    </CartContainer>

    
    
              
  )
}

export default Cart
