import { Fragment } from 'react'
import {useForm, FormProvider } from 'react-hook-form'

import CustomInput from './CustomInput'
import CustomDropDown from './CustomDropDown'

import { FormTitle, Form } from './styled'

const AdressForm = ({token}) => {
  const methods = useForm()
  return (
    <Fragment>
      <FormTitle>Fă comanda <br/> Noi revenim cu apel pentru confirmare </FormTitle>
      <FormProvider {...methods}>
        <Form>
          <CustomInput 
            required 
            name='name' 
            label='Numele'
            placeholder='Numele'
            type='text'
          />
          <CustomInput
            required 
            name='tel'
            label='Telefon'
            placeholder='Telefon'
            type='tel'
            pattern="[+]{1}[0-9]{11,14}"
          />
          <CustomInput
            required
            name='adress'
            label='Adresa'
            placeholder='Adresa'
            type='text'
          />
          <CustomDropDown />
        </Form>

      </FormProvider>
      
    </Fragment>
  )
}

export default AdressForm
