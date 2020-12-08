import {useState, useEffect} from 'react'
import { commerce } from '../../lib/commerce'
import AdressForm from '../../components/AdressForm'

import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
  } from './styled'

const Checkout = ({cart, handleCaptureCheckout}) => {
  const [token, setToken] = useState(null)
  const [shippingData, setShippingData] = useState(null)

  const handleUserDataSubtit = (event, userData) => {
    event.preventDefault();
    setShippingData(userData)
  }

  const handleOrder = () => {
    const orderData = {
      line_items: token.live.line_items,
      customer: { firstName: shippingData.name, phone: shippingData.tel },
      shipping: {
        name: 'Primary',
        street: shippingData.street,
        town_city: shippingData.city
      }
    }
    handleCaptureCheckout(token.id, orderData)
  }

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

  console.log(shippingData)

  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
          <Title>Chechout</Title>
        </Header>
        <InnerContent>
          { token && !shippingData && <AdressForm handleSubmit={handleUserDataSubtit} />}
          {shippingData && <button onClick={handleOrder}>Confirm</button>}
        </InnerContent>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default Checkout
