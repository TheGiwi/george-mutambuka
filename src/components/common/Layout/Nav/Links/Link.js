import React, { Component } from 'react'
import { Link as BaseLink } from 'gatsby'
import { string, node } from 'prop-types'
import {
  extendParentClass,
  extendBaseClass,
  getClassWithVariant,
} from '../../../../../utils/classes'

export class Link extends Component {
  static propTypes = {
    children: string.isRequired,
    to: string.isRequired,
    parentClass: string.isRequired,
  }

  baseClass = extendParentClass.bind(this)('item')

  extend = extendBaseClass.bind(this)

  render() {
    const linkClass = this.extend('link')
    const activeClass = getClassWithVariant('active', linkClass)
    const { children, to } = this.props
    return (
      <li className={this.baseClass}>
        <BaseLink to={to} className={linkClass} activeClassName={activeClass}>
          {children}
        </BaseLink>
      </li>
    )
  }
}

export default Link
