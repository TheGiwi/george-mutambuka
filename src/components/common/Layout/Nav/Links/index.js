import React, { Component } from 'react'
import {
  extendParentClass,
  extendBaseClass,
} from '../../../../../utils/classes'
import Link from './Link'
import links from '../../../../../links'

export class Links extends Component {
  links = [
    ...links,
    {
      children: 'Blog',
      to: '/blog',
    },
  ]

  baseClass = extendParentClass.bind(this)('links')

  extend = extendBaseClass.bind(this)

  renderLink = (linkData, index) => (
    <Link {...linkData} key={index} parentClass={this.baseClass} />
  )

  renderLinks = () => this.links.map(this.renderLink)

  render() {
    return <ul className={this.baseClass}>{this.renderLinks()}</ul>
  }
}

export default Links
