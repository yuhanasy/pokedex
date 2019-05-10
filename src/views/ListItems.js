import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'

import { getByCategory } from '../utils/api/apiHelpers'
import Loading from '../components/loading'
import NetworkError from '../components/networkError'

class ListItems extends Component {
  state = {
    isLoading: true,
    isError: false,
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
      const isLoading = true
      this.setState({ isLoading })
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
        const isLoading = false
        this.setState({ items: data[category].slice(0, 4), isLoading })
      })
      .catch(e => {
        const isError = true
        this.setState({ isError })
        console.log(e)
      })
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
    const { isLoading, isError, items, category } = this.state

    return (
      <Layout>
        <Grid>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <NetworkError />
          ) : (
            this.renderCategoryList(items, category)
          )}
        </Grid>
      </Layout>
    )
  }
}

export default ListItems
