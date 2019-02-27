import React, { Component } from 'react'

class Footer extends Component {
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
          <li>
            <a className='selected' href='#/'>All</a>
          </li>
          <li>
            <a href='#/active'>Active</a>
          </li>
          <li>
            <a href='#/completed'>Completed</a>
          </li>
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
