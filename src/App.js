import { Fragment, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import { commerce } from './lib/commerce'

import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'


const App = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = async () => {
    setIsLoading(true)
    const { data } = await commerce.products.list()
    setProducts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getProducts() 
  }, [])
  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route 
          path='/' exact 
          render={() => (
            <Home 
              products={products} 
              isLoading={isLoading} />
          )} />
        <Route path='/about/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
