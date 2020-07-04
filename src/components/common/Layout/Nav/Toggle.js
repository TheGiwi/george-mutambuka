import React, { Component } from 'react'
import { string } from 'prop-types'

export class Toggle extends Component {
  static propTypes = {
    id: string.isRequired,
  }

  render() {
    const { id } = this.props
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target={`#${id}`}
        aria-controls={id}
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    )
  }
}

export default Toggle
