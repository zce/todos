/* eslint-env jest */
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Header from './Header'

it('renders without crashing', () => {
  const renderer = TestRenderer.create(<Header />)
  const node = renderer.toJSON()
  expect(node.type).toBe('header')
  expect(node.props.className).toBe('header')
  renderer.unmount()
})
