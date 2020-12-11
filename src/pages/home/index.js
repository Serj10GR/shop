import React, { Fragment } from 'react'

import Products from '../../components/Products'
import Categories from '../../components/Categories'

const Home = ({products, isLoading, addToCart, categories, filterProducts}) => {
  return (
    <Fragment>
      <Categories categories={categories} filterProducts={filterProducts} />
      <Products 
        products={products}
        isLoading={isLoading}
        addToCart={addToCart}
      />
    </Fragment>
  )
}

export default Home
