import React, { Component } from 'react'
import { extendParentClass, extend } from '../../../../utils/classes'
import { string } from 'prop-types'

export class Item extends Component {
  static propTypes = {
    href: string.isRequired,
    alt: string.isRequired,
    icon: string.isRequired,
  }

  baseClass = extendParentClass.bind(this)('item')

  render() {
    const link = extend(this.baseClass, 'link')
    const image = extend(link, 'icon')
    const { href, alt, icon } = this.props
    return (
      <li className={this.baseClass}>
        <a href={href} className={link}>
          <img src={icon} alt={alt} className={image} />
        </a>
      </li>
    )
  }
}

export default Item
