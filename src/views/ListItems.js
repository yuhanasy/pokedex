import React, { Component } from 'react'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'

import { getByCategory, getCards } from '../utils/api/apiHelpers'

class ListItems extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    const { category } = this.props.match.params
    this.getItems(category)
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params
    if (prevProps.match.params.category !== category) {
      this.getItems(category)
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

  getCards = type => {
    this.getCardsByType(type)
  }

  getCardsByType = type => {
    getCards('types', type)
      .then(res => res.data)
      .then(data => console.log(data.cards))
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <Layout>
          <Grid>
            {items.map((item, idx) => (
              <Card key={idx}>
                <div onClick={() => this.getCards(item)}>{item}</div>
              </Card>
            ))}
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default ListItems
