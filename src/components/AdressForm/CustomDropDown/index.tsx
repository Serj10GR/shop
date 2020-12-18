import {DropDownWrapper, Select, Option ,Label} from './styled'

type CustomDropDownType = {
  value: string,
  handleChange: any
}

const CustomDropDown = ({value, handleChange}: CustomDropDownType) => {
  return (
    <DropDownWrapper>
      <Label>Localitate</Label>
      <Select 
        value={value} 
        onChange={handleChange}
        name='city'
      >
        <Option value='Cimișlia'>Cimișlia</Option>
        <Option value="Ecaterinovca">Ecaterinovca</Option>
        <Option value='Dimitrovca'>Dimitrovca</Option>
        <Option value='Valea Perjei'>Valea Perjei</Option>
        <Option value="Ciucur Mingir">Ciucur Mingir</Option>
      </Select>
    </DropDownWrapper>
  )
}

export default CustomDropDown