import {useState} from 'react'
import AdressForm from '../../components/AdressForm'

import emailjs from 'emailjs-com';


import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
  } from './styled'

const Checkout = ({cart, refreshCart}) => {
  const [emailProps, setEmailProps] = useState(null)
  const [shippingData, setShippingData] = useState(null)

  const handleUserDataSubmit = (event, userData) => {
    event.preventDefault();
    setShippingData(userData)

    const props = {
      name: userData.name,
      mob: userData.tel,
      items: cart.line_items.map(item => `${item.name} ${item.quantity}`).join()
        }

    setEmailProps(props)
  }


  const clickHandler = ()=> {
    emailjs.send('service_4mec50a', 'template_8wmytn8', emailProps, 'user_71CZsYlbqz7Hp3eSXUJKb')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
      refreshCart();
  }


  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
          <Title>Chechout</Title>
        </Header>
        <InnerContent>
          {!shippingData && <AdressForm handleSubmit={handleUserDataSubmit} />}
          {/* TO DO: add a confirm component */}
          {shippingData && <button onClick={clickHandler}>Confirm</button>}
        </InnerContent>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default Checkout
