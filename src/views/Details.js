import React, { Component } from 'react'
import { Layout, Grid } from '../components/layout'
import { Card } from '../components/card'
import CardDetails from '../components/CardDetails'

import { getCardDetails } from '../utils/api/apiHelpers'

class Details extends Component {
  state = {
    isLoading: true,
    card: {},
  }

  componentDidMount() {
    const { card_id } = this.props.match.params
    this.getCardInfo(card_id)
  }

  getCardInfo = id => {
    getCardDetails(id)
      .then(res => res.data)
      .then(data => {
        const isLoading = false
        this.setState({
          card: data.card,
          isLoading,
        })
      })
  }

  render() {
    const { card, isLoading } = this.state
    return (
      <Layout>
        {!isLoading && (
          <Grid>
            <div className="card-img">
              <Card>
                <img src={card.imageUrl} alt={card.name} />
              </Card>
            </div>
            <div className="card-details">
              <CardDetails card={card} />
            </div>
          </Grid>
        )}
      </Layout>
    )
  }
}

export default Details
