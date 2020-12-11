import React from 'react'

import {Wrapper, Button} from './styled'

const Categories = ({categories, filterProducts}) => {

const categoriesButtons = categories.map(cat=> <Button key={cat.id} onClick={() => filterProducts(cat.slug)}>{cat.name}</Button>)

  return (
    <Wrapper>
      {categoriesButtons}
      
    </Wrapper>
  )
}

export default Categories
