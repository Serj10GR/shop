import React, { Fragment } from 'react'

import Products from '../../components/Products'

const Home = ({products, isLoading}) => {
  return (
    <Fragment>
      <Products 
        products={products}
        isLoading={isLoading}
      />
    </Fragment>
  )
}

export default Home
