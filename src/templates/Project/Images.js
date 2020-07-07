import React, { Component } from 'react'
import Image from 'gatsby-image'
import { arrayOf, object } from 'prop-types'
import { extendParentClass, extendBaseClass } from '../../utils/classes'

export class Images extends Component {
  static propTypes = {
    images: arrayOf(object),
  }

  baseClass = extendParentClass.bind(this)('list')

  extend = extendBaseClass.bind(this)

  renderImages = () =>
    this.props.images.map((image, index) => (
      <Image
        fluid={image.childImageSharp.fluid}
        key={index}
        className={this.extend('item')}
      />
    ))

  render() {
    const { images } = this.props
    return (
      <div className={this.baseClass}>
        {images && images.length && this.renderImages()}
      </div>
    )
  }
}

export default Images
