import React, { Component } from 'react'
import Item from './Item'
import { extendParentClass } from '../../../../../utils/classes'
import { icons } from '../../../../../links'

export class Icons extends Component {
  baseClass = extendParentClass.bind(this)('icons')

  links = icons

  renderLink = (linkData, index) => (
    <Item parentClass={this.baseClass} {...linkData} key={index} />
  )

  renderLinks = () => this.links.map(this.renderLink)

  render() {
    return <ul className={this.baseClass}>{this.renderLinks()}</ul>
  }
}

export default Icons
