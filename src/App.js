import { Fragment, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import { commerce } from './lib/commerce'

import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/Cart'
import Error from './pages/error'


const App = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState({})

  const getProducts = async () => {
    setIsLoading(true)
    const { data } = await commerce.products.list()
    setProducts(data)
    setIsLoading(false)
  }

  const getCartData = async () => {
    const res = await commerce.cart.retrieve()
    setCart(res)
  }
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    getProducts()
    getCartData() 
  }, [])

 
  return (
    <Fragment>
      <GlobalStyles />
      <NavBar cart={cart} />
      <Switch>
        <Route 
          path='/' exact 
          render={() => (
            <Home 
              products={products} 
              isLoading={isLoading}
              addToCart={addToCart} 
              />
          )} />
        <Route path='/about/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route 
          path='/cart' 
          render={() => (
            <Cart cart={cart} />
          )} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
