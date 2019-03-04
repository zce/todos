/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Item />, div)
  ReactDOM.unmountComponentAtNode(div)
})
