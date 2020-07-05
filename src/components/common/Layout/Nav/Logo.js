import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from './logo.svg'
import { extendParentClass, extendBaseClass } from '../../../../utils/classes'

export class Logo extends Component {
  baseClass = extendParentClass.bind(this)('logo')

  extend = extendBaseClass.bind(this)

  render() {
    return (
      <Link to="/" className={this.baseClass}>
        <img
          src={logo}
          alt="The GiWi Homepage"
          className={this.extend('image')}
        />
      </Link>
    )
  }
}

export default Logo
