import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routes: [
        { path: '/', name: 'All' },
        { path: '/active', name: 'Active' },
        { path: '/completed', name: 'Completed' }
      ]
    }
  }

  render () {
    if (!this.props.items.length) return null

    const activeCount = this.props.items.reduce((count, item) => {
      return item.completed ? count - 1 : count
    }, this.props.items.length)

    return (
      // This footer should hidden by default and shown when there are todos
      <footer className='footer'>
        {/* This should be `0 items left` by default */}
        <span className='todo-count'><strong>{activeCount}</strong> {activeCount === 1 ? `item` : 'items'} left</span>
        {/* Remove this if you don't implement routing */}
        <ul className='filters'>
          {
            this.state.routes.map(i =>
              <li key={i.path}>
                <a className={i.path === this.props.current ? 'selected' : ''} href={'#' + i.path} onClick={() => this.props.onFilter(i.path)}>{i.name}</a>
              </li>
            )
          }
        </ul>
        {
          activeCount !== this.props.items.length &&
          <button className='clear-completed' onClick={this.props.onClear}>Clear completed</button>
        }
      </footer>
    )
  }
}

export default Footer
