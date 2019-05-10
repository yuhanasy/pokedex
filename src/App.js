import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './views/Home'
import CardsList from './views/CardsList'
import ListItems from './views/ListItems'
import Details from './views/Details'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cards" component={CardsList} exact />
          <Route path="/cards/:card_id" component={Details} />
          <Route path="/:category" component={ListItems} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
