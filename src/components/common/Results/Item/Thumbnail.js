import React, { Component } from 'react'
import Image from 'gatsby-image'
import { object, string } from 'prop-types'
import {
  extendParentClass,
  getClassWithVariant,
  extendBaseClass,
} from '../../../../utils/classes'

export class Thumbnail extends Component {
  static propTypes = {
    thumbnail: object.isRequired,
    type: string.isRequired,
  }

  baseClass = extendParentClass.bind(this)('thumbnail')

  extend = extendBaseClass.bind(this)

  getColor = () => {
    const { thumbnail } = this.props
    if (thumbnail) return thumbnail.colors.vibrant
    return 'gray'
  }

  getStyles = () => {
    const backgroundColor = this.getColor()
    return {
      backgroundColor,
    }
  }

  getClasses = () => {
    const { type } = this.props
    return getClassWithVariant(type, this.baseClass)
  }

  render() {
    const { thumbnail } = this.props
    if (thumbnail) {
      return (
        <div className={this.getClasses()} style={this.getStyles()}>
          <Image
            fluid={thumbnail.childImageSharp.fluid}
            className={this.extend('image')}
          />
        </div>
      )
    }
    return null
  }
}

export default Thumbnail
