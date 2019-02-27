import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Info from './components/Info'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.getInitialData()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleToggleAll = this.handleToggleAll.bind(this)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
  }

  getInitialData () {
    // TODO: Use local storage
    setTimeout(() => {
      this.setState({
        items: [
          { id: 1, text: 'Learning HTML', completed: true },
          { id: 2, text: 'Learning CSS', completed: true },
          { id: 3, text: 'Learning JavaScript', completed: false },
          { id: 4, text: 'Learning Node.js', completed: false },
          { id: 5, text: 'Learning React.js', completed: false }
        ]
      })
    }, 100)
  }

  render () {
    return (
      <>
        <section className='todoapp'>
          <Header onAdd={this.handleAdd} />
          <Main
            items={this.state.items}
            onDelete={this.handleDelete}
            onToggle={this.handleToggle}
            onUpdate={this.handleUpdate}
            onToggleAll={this.handleToggleAll}
          />
          <Footer items={this.state.items} onClear={this.handleClearCompleted} />
        </section>
        <Info />
      </>
    )
  }

  handleAdd (text) {
    const id = this.state.items.reduce((m, i) => Math.max(i.id, m), -1) + 1
    const items = [ ...this.state.items, { id, text, completed: false } ]
    this.setState({ items })
  }

  handleDelete (id) {
    const items = this.state.items.filter(i => i.id !== id)
    this.setState({ items })
  }

  handleToggle (id) {
    const items = this.state.items.map(i => i.id === id ? { ...i, completed: !i.completed } : i)
    this.setState({ items })
  }

  handleUpdate (id, text) {
    const items = this.state.items.map(i => i.id === id ? { ...i, text } : i)
    this.setState({ items })
  }

  handleToggleAll () {
    const allCompleted = this.state.items.every(i => i.completed)
    const items = this.state.items.map(i => ({ ...i, completed: !allCompleted }))
    this.setState({ items })
  }

  handleClearCompleted () {
    const items = this.state.items.filter(i => !i.completed)
    this.setState({ items })
  }
}

export default App
