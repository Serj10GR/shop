import React from 'react'

import Product from './Product'
import {ProductsWrapper} from './styled'

const prods = [
  { id: 1, name: 'Napoletana', description: 'mozzarela, piper, ardei', price: 25 }, 
  { id: 2, name: 'Speranta', description: 'running shoes', price: 70 },
  { id: 3, name: 'Quantro Stagione', description: 'sunca, ciuperci, mozzarela', price: 189 },
  { id: 4, name: 'shoes', description: 'running shoes', price: 100 },
  { id: 5, name: 'shoes', description: 'running shoes', price: 100 },
  { id: 6, name: 'shoes', description: 'running shoes', price: 100 },
  { id: 7, name: 'shoes', description: 'running shoes', price: 100 },
  { id: 8, name: 'shoes', description: 'running shoes', price: 100 },
]

const Products = () => {

  return (
    <ProductsWrapper>
      {prods.map(prod => <Product id={prod.id} {...prod} />)}
    </ProductsWrapper>
  )
}

export default Products
