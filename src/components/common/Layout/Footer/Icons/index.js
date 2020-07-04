import React, { Component } from 'react'
import dribbbleIcon from './dribbble.svg'
import youtubeIcon from './youtube.svg'
import Item from './Item'
import { extendParentClass } from '../../../../../utils/classes'

export class Icons extends Component {
  baseClass = extendParentClass.bind(this)('icons')

  links = [
    {
      icon: dribbbleIcon,
      href: '#',
      alt: 'Dribbble',
    },
    {
      icon: youtubeIcon,
      href: '#',
      alt: 'YouTube',
    },
  ]

  renderLink = (linkData, index) => (
    <Item parentClass={this.baseClass} {...linkData} key={index} />
  )

  renderLinks = () => this.links.map(this.renderLink)

  render() {
    return <ul className={this.baseClass}>{this.renderLinks()}</ul>
  }
}

export default Icons
