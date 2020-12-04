import {useState, useEffect} from 'react'
import { commerce } from '../../lib/commerce'
import AdressForm from '../../components/AdressForm'

import {Button} from '../Cart/styled'
import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
  } from './styled'

const Checkout = ({cart}) => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const createToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
        setToken(token)

      } catch(error) {

      }
    }
    createToken()

  }, [cart])


  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
          <Title>Chechout</Title>
        </Header>
        <InnerContent>
          {
            token && <AdressForm token={token} />
          }
        </InnerContent>
       <Button>Next</Button>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default Checkout
