import React, { Component } from 'react'
import Image from 'gatsby-image'
import Thumbnail from './Thumbnail'
import { object, string, shape, arrayOf } from 'prop-types'
import { extendParentClass, extendBaseClass } from '../../../utils/classes'

export class Item extends Component {
  static propTypes = {
    frontmatter: shape({
      title: string.isRequired,
      images: arrayOf(object),
    }).isRequired,
    fields: shape({
      slug: string.isRequired,
    }),
  }

  baseClass = extendParentClass.bind(this)('item')

  extend = extendBaseClass.bind(this)

  render() {
    const { title, thumbnail } = this.props.frontmatter
    return (
      <div className={this.baseClass}>
        <Thumbnail thumbnail={thumbnail} parentClass={this.baseClass} />
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    )
  }
}

export default Item
