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

  renderImage = (image, index) => (
    <Image
      fluid={image.childImageSharp.fluid}
      key={index}
      className={this.extend('item')}
    />
  )

  addNewImage = (images, image, index) => {
    if (image) {
      const newImage = this.renderImage(image, index)
      return [...images, newImage]
    }
    return images
  }

  renderImages = () => this.props.images.reduce(this.addNewImage, [])

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
