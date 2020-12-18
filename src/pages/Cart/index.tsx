import { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { EnumType } from 'typescript'

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

type TCartItem = {
  id: string,
  name: string,
  media: any,
  quantity: number,
  price: any
  removeFromCart: any,
  updateCart: any
}

type TCart = {
 cart: {
   line_items: Array<TCartItem>,
   subtotal: any
 }
 removeFromCart: Function,
 updateCart: Function
}
const Cart = ({cart, removeFromCart, updateCart}: TCart) => {
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
