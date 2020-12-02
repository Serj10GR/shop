import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'


const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
