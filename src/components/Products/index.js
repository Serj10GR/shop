import React from 'react'

import Product from './Product'
import {ProductsWrapper} from './styled'


const Products = ({products, isLoading}) => {
  console.log(products)
  console.log(isLoading)

  return (
    <ProductsWrapper>
      {products.map(prod => 
        <Product 
          name={prod.name}
          price={prod.price.raw}
          img={prod.media.source}
          description={prod.description.slice(3, -4)} 
        /> 
      )}
    </ProductsWrapper>
  )
}

export default Products
