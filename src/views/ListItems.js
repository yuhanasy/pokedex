import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'

import { getByCategory, getCards } from '../utils/api/apiHelpers'

class ListItems extends Component {
  state = {
    items: [],
    category: '',
  }

  componentDidMount() {
    const { category } = this.props.match.params
    this.getItems(category)

    let param = category.slice()
    if (category === 'subtypes') {
      param = 'subtype'
    } else if (category === 'supertypes') {
      param = 'supertype'
    }
    this.setState({ category: param })
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params
    if (prevProps.match.params.category !== category) {
      this.getItems(category)

      let param = category.slice()
      if (category === 'subtypes') {
        param = 'subtype'
      } else if (category === 'supertypes') {
        param = 'supertype'
      }
      this.setState({ category: param })
    }
  }

  getItems = category => {
    getByCategory(category)
      .then(res => res.data)
      .then(data => {
        if (category === 'cards') {
          const items = data.cards.map(card => card.id)
          this.setState({ items })
        } else {
          this.setState({ items: data[category] })
        }
      })
  }

  getCards = (category, type) => {
    this.getCardsByType(category, type)

    this.setState({ category: 'cards' })
  }

  getCardsByType = (category, type) => {
    getCards(category, type)
      .then(res => res.data)
      .then(data => {
        const items = data.cards.map(card => card.id)
        this.setState({ items })
      })
  }

  renderCards = cards => {
    return cards.map((card, idx) => (
      <Link to={`/cards/${card}`} key={card}>
        <Card>{card}</Card>
      </Link>
    ))
  }

  renderCategoryList = (items, category) => {
    return items.map((item, idx) => (
      <Card key={idx}>
        <div onClick={() => this.getCards(category, item)}>{item}</div>
      </Card>
    ))
  }

  render() {
    const { items, category } = this.state

    return (
      <div>
        <Layout>
          <Grid>
            {category === 'cards'
              ? this.renderCards(items)
              : this.renderCategoryList(items, category)}
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default ListItems
