import {Fragment} from 'react'

import {ButtonsContainer, Button} from '../styled'
import {TextLine, Cell, Subtitle, Price} from './styled'


type ConfirmBlockType = {
 submitOrder: () => void,
 tel: string,
 adress: string,
 city: string,
 name: string,
 handleBackStep: () => void,
 cart: {
   line_items: Array<{
     name: string,
     price: {
       formatted_with_code: string
     },
   }>,
   subtotal: {
     formatted_with_code: string
   }
 }
}

const ConfirmBlock = ({
  submitOrder,
  cart,
  name,
  tel,
  adress,
  city,
  handleBackStep}: ConfirmBlockType) => {
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
