import {
  CartItemWrapper,
  ItemTitle,
  QuantWrapper,
  ArrowDown,
  ArrowUp,
  NumberSpan,
  PriceWrapper,
  CloseButton,
  CloseIcon
} from './styled'

const CartItem = ({
  id,
  name,
  media,
  quantity,
  price, 
  removeFromCart,
  updateCart}) => {
  return (
    <CartItemWrapper>
      <img src={media.source} alt={name}/>
      <ItemTitle>{name}</ItemTitle>
      <QuantWrapper>
        <ArrowUp onClick={() => updateCart(id, quantity + 1)}/>
       <NumberSpan>{quantity}</NumberSpan>
        <ArrowDown onClick={() => updateCart(id, quantity - 1)} />
      </QuantWrapper>
      <PriceWrapper>{price.formatted_with_code}</PriceWrapper>
      <CloseButton onClick={() => removeFromCart(id)}>
        <CloseIcon />
      </CloseButton>
    </CartItemWrapper>
  )
}

export default CartItem
