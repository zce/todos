import React, { Component } from 'react'

import Item from './Item'

class Main extends Component {
  render () {
    if (!this.props.items.length) return null

    return (
      // This section should be hidden by default and shown when there are todos
      <section className='main'>
        <input id='toggle-all' className='toggle-all' type='checkbox' checked={this.props.items.every(i => i.completed)} onChange={this.props.onToggleAll} />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <ul className='todo-list'>
          {
            this.props.items.map(item =>
              <Item
                key={item.id}
                text={item.text}
                completed={item.completed}
                onDelete={() => this.props.onDelete(item.id)}
                onToggle={() => this.props.onToggle(item.id)}
                onUpdate={text => this.props.onUpdate(item.id, text)}
              />
            )
          }
        </ul>
      </section>
    )
  }
}

export default Main
