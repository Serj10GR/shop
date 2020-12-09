import {Fragment} from 'react'

import {ButtonsContainer, Button} from '../styled'
import {TextLine, Cell, Subtitle, Price} from './styled'

const ConfirmBlock = ({
  submitOrder,
  cart,
  name,
  tel,
  adress,
  city,
  handleBackStep}) => {
  return (
    <Fragment>
      <Subtitle>Comanda: </Subtitle>
      {cart.line_items.map(item => {
        return <TextLine>
          {item.name}
      <Cell isPrice>{item.price.formatted_with_code}</Cell>
        </TextLine>
      })}
      <Price>Total: <span>{cart.subtotal.formatted_with_code}</span></Price>

      <Subtitle>Livrare: </Subtitle>
      <TextLine>
        Nume: <Cell>{name}</Cell>
      </TextLine>
      <TextLine>
        Telefon: <Cell>{tel}</Cell>
      </TextLine>
      <TextLine>
        Adresa: <Cell>{adress}</Cell>
      </TextLine>
      <TextLine>
        Localitate: <Cell>{city}</Cell> 
      </TextLine>

      <ButtonsContainer isConfirm>
        <Button onClick={handleBackStep}>Back</Button>
        <Button isPrimary onClick={submitOrder}>Confirm</Button>
      </ButtonsContainer>
      
    </Fragment>
  )
}

export default ConfirmBlock
