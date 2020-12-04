
import {InputWrapper, Label, Input} from './styled'


const CustomInput = ({
  label,
  name,
  required,
  placeholder,
  type,
  pattern}) => {
  return (
    <InputWrapper>
       <Label>{label}</Label>
       <Input 
        required={required} 
        name={name} 
        placeholder={placeholder}
        type={type}
        pattern={pattern} 
      /> 
    </InputWrapper>
  )
}

export default CustomInput
