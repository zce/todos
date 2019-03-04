/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import Info from './Info'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Info />, div)
  expect(div.children[0].children[0].innerHTML).toBe('Double-click to edit a todo')
  ReactDOM.unmountComponentAtNode(div)
})
