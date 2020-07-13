import React, { Component } from 'react'
import Image from 'gatsby-image'
import { object, string, number } from 'prop-types'
import { extendParentClass, extend } from '../../../utils/classes'

export class Slide extends Component {
  static propTypes = {
    src: object,
    alt: string.isRequired,
    index: number.isRequired,
  }

  baseClass = extendParentClass.bind(this)('slide')

  contentClass = extend(this.baseClass, 'content')

  getSlideClasses = (index) => {
    const baseClass = `${this.baseClass} carousel-item`
    if (index === 0) {
      return `${baseClass} active`
    }
    return baseClass
  }

  render() {
    const { src, alt, index } = this.props
    return (
      <div className={this.getSlideClasses(index)}>
        <div className={this.contentClass}>
          {src && (
            <Image
              alt={alt}
              fluid={src.childImageSharp.fluid}
              className={extend(this.contentClass, 'image')}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Slide
