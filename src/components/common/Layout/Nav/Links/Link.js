import React, { Component } from 'react'
import { Link as BaseLink } from 'gatsby'
import {
  extendParentClass,
  extendBaseClass,
  getClassWithVariant,
} from '../../../../../utils/classes'

export class Link extends Component {
  baseClass = extendParentClass.bind(this)('item')

  extend = extendBaseClass.bind(this)

  render() {
    const linkClass = this.extend('link')
    const activeClass = getClassWithVariant('active', linkClass)
    return (
      <li className={this.baseClass}>
        <BaseLink
          {...this.props}
          className={linkClass}
          activeClassName={activeClass}
        />
      </li>
    )
  }
}

export default Link
