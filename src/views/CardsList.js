import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'

import { getCards } from '../utils/api/apiHelpers'

class CardsList extends Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search)
      const param = Object.keys(parsed)[0]
      const paramName = parsed[param]

      this.getItems(param, paramName)
    } else {
      this.getItems()
    }
  }

  getItems = (param, paramName) => {
    getCards(param, paramName)
      .then(res => res.data)
      .then(data => this.setState({ cards: data.cards.slice(0, 4) }))
  }

  renderCards = cards => {
    return cards.map((card, idx) => (
      <Card key={idx}>
        <Link to="/cards">
          <img src={card.imageUrl} alt={card.name} />
        </Link>
      </Card>
    ))
  }

  render() {
    const { cards } = this.state

    return (
      <Layout>
        <Grid>{this.renderCards(cards)}</Grid>
      </Layout>
    )
  }
}
export default CardsList
