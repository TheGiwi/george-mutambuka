import React, { Component } from 'react'
import {
  extendParentClass,
  extendBaseClass,
  extend,
} from '../../../../../utils/classes'
import { string } from 'prop-types'

export class Item extends Component {
  baseClass = extendParentClass.bind(this)('item')

  extend = extendBaseClass.bind(this)

  static propTypes = {
    icon: string.isRequired,
    href: string.isRequired,
    alt: string.isRequired,
  }

  render() {
    const linkClass = this.extend('link')
    const { href, icon, alt } = this.props
    return (
      <li className={this.baseClass}>
        <a className={linkClass} href={href}>
          <img src={icon} alt={alt} className={extend(linkClass, 'icon')} />
        </a>
      </li>
    )
  }
}

export default Item
