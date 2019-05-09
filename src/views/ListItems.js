import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'

import { getByCategory } from '../utils/api/apiHelpers'

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
      .then(data => this.setState({ items: data[category].slice(0, 4) }))
  }

  renderCategoryList = (items, category) => {
    return items.map((item, idx) => (
      <Card key={idx}>
        <Link to={`/cards?${category}=${item}`}>
          <div>{item}</div>
        </Link>
      </Card>
    ))
  }

  render() {
    const { items, category } = this.state

    return (
      <Layout>
        <Grid>{this.renderCategoryList(items, category)}</Grid>
      </Layout>
    )
  }
}

export default ListItems
