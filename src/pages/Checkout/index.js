import {useState} from 'react'
import AdressForm from '../../components/AdressForm'
import ConfirmBlock from '../../components/AdressForm/ConfirmBlock'

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
  const [isConfimerd, setIsConfirmed] = useState(false)

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

  const handleBackStep = () => {
    setShippingData(null)
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

  console.log(cart)

  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
         <Title>{shippingData ? 'Confirmare' : "Checkout"}</Title>
        </Header>
        <InnerContent>
          {!shippingData 
            ? <AdressForm handleSubmit={handleUserDataSubmit} />
            : <ConfirmBlock 
                cart={cart} 
                submitOrder={clickHandler}
                {...shippingData}
                handleBackStep={handleBackStep} 
              />
          }
        </InnerContent>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default Checkout
