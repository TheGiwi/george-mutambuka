import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'gatsby'
import { object, string, shape, arrayOf } from 'prop-types'
import { extendParentClass, extendBaseClass } from '../../../../utils/classes'

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

  getItemUrl = () => {
    const { slug } = this.props.fields
    return `/projects${slug}`
  }

  render() {
    const { title, thumbnail } = this.props.frontmatter
    return (
      <Link className={this.baseClass} to={this.getItemUrl()}>
        <Thumbnail thumbnail={thumbnail} parentClass={this.baseClass} />
        <div>
          <h2 className={this.extend('title')}>{title}</h2>
        </div>
      </Link>
    )
  }
}

export default Item
