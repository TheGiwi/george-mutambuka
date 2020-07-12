import React, { Component } from 'react'
import { string } from 'prop-types'
import { extendParentClass } from '../../utils/classes'

export class YouTube extends Component {
  static propTypes = {
    youtube: string.isRequired,
  }

  baseClass = extendParentClass.bind(this)('video')

  render() {
    const { youtube } = this.props
    return (
      <div className={this.baseClass}>
        <iframe
          width="420"
          height="315"
          src={youtube}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
}

export default YouTube
