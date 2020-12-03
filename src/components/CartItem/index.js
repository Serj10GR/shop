import {
  CartItemWrapper,
  ItemTitle,
  QuantWrapper,
  ArrowDown,
  ArrowUp,
  NumberSpan, Text} from './styled'

const CartItem = ({name, media, quantity}) => {
  return (
    <CartItemWrapper>
      <img src={media.source} alt={name}/>
      <Tex>
        <ItemTitle>{name}</ItemTitle>

      </Tex>   
      <QuantWrapper>
        <ArrowUp />
       <NumberSpan>{quantity}</NumberSpan>
        <ArrowDown />
      </QuantWrapper>
    </CartItemWrapper>
  )
}

export default CartItem
