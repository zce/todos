import React, { Component } from 'react'

class Info extends Component {
  render () {
    return (
      <footer className='info'>
        <p>Double-click to edit a todo</p>
        {/* Remove the below line ↓ */}
        <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
        {/* Change this out with your name and url ↓ */}
        <p>Created by <a href='https://zce.me'>zce</a></p>
        <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
      </footer>
    )
  }
}

export default Info
