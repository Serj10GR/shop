import React from 'react'

import Product from './Product'
import {ProductsWrapper} from './styled'

type ProductsProps = {
 products: any;
 isLoading: boolean,
 addToCart: any
}

const Products = ({products, isLoading, addToCart} : ProductsProps) => {

  return (
    <ProductsWrapper>
      {products.map(prod => 
        <Product
          key={prod.id} 
          name={prod.name}
          price={prod.price.raw}
          img={prod.media.source}
          description={prod.description.slice(3, -4)}
          addToCart={addToCart}
          id={prod.id} 
        /> 
      )}
    </ProductsWrapper>
  )
}

export default Products
