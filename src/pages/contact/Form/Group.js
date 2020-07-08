import React, { Component } from 'react'
import { node, string } from 'prop-types'

export class Group extends Component {
  static propTypes = {
    id: string.isRequired,
    label: string.isRequired,
    Component: node,
    className: string,
  }

  render() {
    const {
      id,
      label,
      Component = 'input',
      className = '',
      ...other
    } = this.props
    return (
      <div className={`form-group ${className}`}>
        <label htmlFor={id}>{label}</label>
        <Component
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...other}
        />
      </div>
    )
  }
}

export default Group
