import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  render () {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
      </header>
    )
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  handleKeyDown (e) {
    if (e.which === 13) {
      this.props.onAdd(e.target.value.trim())
      this.setState({ value: '' })
    }
  }
}

export default Header
