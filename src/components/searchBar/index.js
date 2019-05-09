import React, { Component } from 'react'

import searchIcon from '../../assets/images/search-icon.png'
import closeIcon from '../../assets/images/close-icon.png'

import './styles.scss'

class SearchBar extends Component {
  state = {
    query: '',
  }

  handleChange = e => {
    const query = e.target.value
    this.setState({
      query,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { query } = this.state

    console.log(query)
  }

  closeButtonToggle = () => {
    const { query } = this.state
    if (query.length) {
      return ''
    } else return 'hidden'
  }

  resetSearchInput = () => {
    const query = ''
    this.setState({ query })
  }

  render() {
    const { query } = this.state

    return (
      <div className="input-wrapper">
        <img className="icon" src={searchIcon} alt="" />
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            onChange={this.handleChange}
            type="text"
            placeholder="Search Cards"
            value={query}
          />
        </form>
        <img
          className={`icon ${this.closeButtonToggle()}`}
          onClick={this.resetSearchInput}
          src={closeIcon}
          alt=""
        />
      </div>
    )
  }
}

export default SearchBar
