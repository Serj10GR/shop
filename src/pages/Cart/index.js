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
  Button,
   } from './styled'


const Cart = ({cart, removeFromCart, updateCart}) => {
  const isEmpty = !cart.line_items?.length; 


  
  return (
    <CartContainer>
      <CartWrapper>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
          {
            !isEmpty
            &&
            <TotalPrice>
              {cart.subtotal.formatted}<span>MDL</span>
            </TotalPrice>
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
                 {cart.line_items.map(item => 
                   <CartItem 
                     key={item.id} 
                     {...item}
                     removeFromCart={removeFromCart}
                     updateCart={updateCart}
                    />
                  )}
             </Fragment>
          }
        </CartContent>
        {
          !isEmpty 
          && <Link to='/checkout'>
            <Button>Comanda acum</Button>
          </Link>
        }

      </CartWrapper>
    </CartContainer>

    
    
              
  )
}

export default Cart
