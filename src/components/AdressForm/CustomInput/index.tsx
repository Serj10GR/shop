
import {InputWrapper, Label, Input} from './styled'

type TCustomInput = {
  label: string,
  name: string,
  required?: boolean,
  placeholder: string,
  type: any,
  pattern?: any,
  value: string,
  onChange: any
}

const CustomInput = ({
  label,
  name,
  required,
  placeholder,
  type,
  pattern,
  value,
  onChange}: TCustomInput) => {
  return (
    <InputWrapper>
       <Label>{label}</Label>
       <Input 
        required={required} 
        name={name} 
        placeholder={placeholder}
        type={type}
        pattern={pattern}
        onChange={onChange}
        value={value} 
      /> 
    </InputWrapper>
  )
}

export default CustomInput
