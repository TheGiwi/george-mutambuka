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
      href: 'https://dribbble.com/TheGiwi',
      alt: 'Dribbble',
    },
    {
      icon: youtubeIcon,
      href: 'https://www.youtube.com/channel/UC7sqF3SKz8PSNq8x7zCYI5A',
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
