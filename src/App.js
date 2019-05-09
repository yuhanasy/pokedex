import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './views/Home'
import ListItems from './views/ListItems'
import Details from './views/Details'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:category" component={ListItems} />
          <Route path="/cards/:card_id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
