import React, { Component } from 'react'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.text,
      editing: false
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    // autofocus 2
    if (prevState.editing || !this.state.editing) return
    this.refs.input.focus()
    this.refs.input.setSelectionRange(0, this.refs.input.value.length)
  }

  render () {
    const classes = []
    this.props.completed && classes.push('completed')
    this.state.editing && classes.push('editing')

    return (
      <li className={classes.join(' ')}>
        <div className='view'>
          <input className='toggle' type='checkbox' checked={this.props.completed} onChange={this.props.onToggle} />
          <label onDoubleClick={this.handleEdit}>{this.props.text}</label>
          <button className='destroy' onClick={this.props.onDelete} />
        </div>
        <input className='edit' ref='input' value={this.state.text} onChange={this.handleChange} onBlur={this.handleSubmit} onKeyDown={this.handleKeyDown} />
        {/* autofocus 1 */}
        {/* {this.state.editing && <input className="edit" value={this.state.text} autoFocus={true} onChange={this.handleChange} onBlur={this.handleSubmit} onKeyDown={this.handleKeyDown} />} */}
      </li>
    )
  }

  handleEdit () {
    this.setState({ editing: true })
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    const text = this.state.text.trim()
    if (text) {
      this.props.onUpdate(text)
      this.setState({ text, editing: false })
    } else {
      this.props.onDelete()
    }
  }

  handleKeyDown (e) {
    if (e.which === 27) {
      this.setState({ text: this.props.text, editing: false })
    } else if (e.which === 13) {
      this.handleSubmit(e)
    }
  }
}

export default Item
