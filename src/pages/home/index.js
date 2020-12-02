import React, { Fragment } from 'react'

import Products from '../../components/Products'

const Home = ({products, isLoading, addToCart}) => {
  return (
    <Fragment>
      <Products 
        products={products}
        isLoading={isLoading}
        addToCart={addToCart}
      />
    </Fragment>
  )
}

export default Home
