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

const CartItem = ({name, media, quantity, price}) => {
  return (
    <CartItemWrapper>
      <img src={media.source} alt={name}/>
      <ItemTitle>{name}</ItemTitle>
      <QuantWrapper>
        <ArrowUp />
       <NumberSpan>{quantity}</NumberSpan>
        <ArrowDown />
      </QuantWrapper>
      <PriceWrapper>{price.formatted_with_code}</PriceWrapper>
      <CloseButton>
        <CloseIcon />
      </CloseButton>
    </CartItemWrapper>
  )
}

export default CartItem
