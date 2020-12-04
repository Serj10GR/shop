import React from 'react'

import AdressForm from '../../components/AdressForm'

import {Button} from '../Cart/styled'
import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
  } from './styled'

const Checkout = () => {
  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
          <Title>Chechout</Title>
        </Header>
        <InnerContent>
         <AdressForm />
        </InnerContent>
       <Button>Next</Button>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default Checkout
