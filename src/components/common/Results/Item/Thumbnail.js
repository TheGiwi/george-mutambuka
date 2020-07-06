import React, { Component } from 'react'
import Image from 'gatsby-image'
import { object } from 'prop-types'
import { extendParentClass, extendBaseClass } from '../../../../utils/classes'

export class Thumbnail extends Component {
  static propTypes = {
    thumbnail: object.isRequired,
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

  render() {
    const { thumbnail } = this.props
    if (thumbnail) {
      return (
        <div className={this.baseClass} style={this.getStyles()}>
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
