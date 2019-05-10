import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'
import Loading from '../components/loading'
import NetworkError from '../components/networkError'

import { getCards } from '../utils/api/apiHelpers'

class CardsList extends Component {
  state = {
    isLoading: true,
    isError: false,
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

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const isLoading = true
      this.setState({ isLoading })

      if (this.props.location.search) {
        const parsed = queryString.parse(this.props.location.search)
        const param = Object.keys(parsed)[0]
        const paramName = parsed[param]

        this.getItems(param, paramName)
      } else {
        this.getItems()
      }
    }
  }

  getItems = (param, paramName) => {
    getCards(param, paramName)
      .then(res => res.data)
      .then(data => {
        const isLoading = false
        this.setState({ cards: data.cards, isLoading })
      })
      .catch(e => {
        const isError = true
        this.setState({ isError })
        console.log(e)
      })
  }

  renderCards = cards => {
    return cards.map((card, idx) => (
      <Card key={idx}>
        <Link to={`/cards/${card.id}`}>
          <img src={card.imageUrl} alt={card.name} />
        </Link>
      </Card>
    ))
  }

  render() {
    const { cards, isLoading, isError } = this.state

    return (
      <Layout>
        <Grid>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <NetworkError />
          ) : (
            this.renderCards(cards)
          )}
        </Grid>
      </Layout>
    )
  }
}
export default CardsList
