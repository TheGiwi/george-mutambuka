import React, { Component } from 'react'
import { icons } from '../../../../links'
import { extendParentClass, extendBaseClass } from '../../../../utils/classes'
import Item from './Item'

export class Icons extends Component {
  baseClass = extendParentClass.bind(this)('icons')

  extend = extendBaseClass.bind(this)

  renderIcon = (iconData, index) => (
    <Item key={index} parentClass={this.baseClass} {...iconData} />
  )

  renderList = () => icons.map(this.renderIcon)

  render() {
    return <ul className={this.baseClass}>{this.renderList()}</ul>
  }
}

export default Icons
