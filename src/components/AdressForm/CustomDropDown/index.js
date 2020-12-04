import {DropDownWrapper, Select, Option ,Label} from './styled'

const CustomDropDown = () => {
  return (
    <DropDownWrapper>
      <Label>Localitate</Label>
      <Select>
        <Option>Cimișlia</Option>
        <Option>Ecaterinovca</Option>
        <Option>Dimitrovca</Option>
        <Option>Valea Perjei</Option>
        <Option>Ciucur Mingir</Option>
      </Select>
    </DropDownWrapper>
  )
}

export default CustomDropDown
