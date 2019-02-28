import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Info from './components/Info'

import storage from './lib/storage'

import './App.css'

const showFilters = {
  '/': () => true,
  '/active': i => !i.completed,
  '/completed': i => i.completed
}

const getCurrentPath = () => {
  const current = window.location.hash.substr(1)
  return (current && [ '/active', '/completed' ].includes(current)) ? current : '/'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: storage.get('todos') || [],
      path: getCurrentPath(),
      loading: true
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleToggleAll = this.handleToggleAll.bind(this)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  componentWillMount () {
    this.setState({ loading: false })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.items === this.state.items) return
    // auto save
    console.log(this.state.items)
    storage.set('todos', this.state.items)
  }

  render () {
    if (this.state.loading) return null

    const showItems = this.state.items.filter(showFilters[this.state.path])

    return (
      <>
        <section className='todoapp'>
          <Header onAdd={this.handleAdd} />
          <Main
            items={showItems}
            onDelete={this.handleDelete}
            onToggle={this.handleToggle}
            onUpdate={this.handleUpdate}
            onToggleAll={this.handleToggleAll}
          />
          <Footer
            items={this.state.items}
            current={this.state.path}
            onFilter={this.handleFilter}
            onClear={this.handleClearCompleted}
          />
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

  handleFilter (path) {
    this.setState({ path })
  }
}

export default App
