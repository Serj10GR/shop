import React from 'react'

import {Wrapper, Button} from './styled'

type TCategory = {
  id: string,
  slug: string,
  name: string
}

type TCategories = {
  categories: Array<TCategory>,
  filterProducts: any
}

const Categories = ({categories, filterProducts}: TCategories) => {

const categoriesButtons = categories.map(cat  => <Button key={cat.id} onClick={() => filterProducts(cat.slug)}>{cat.name}</Button>)

  return (
    <Wrapper>
      {categoriesButtons}
      
    </Wrapper>
  )
}

export default Categories
