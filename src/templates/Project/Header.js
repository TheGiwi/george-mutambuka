import React, { Component } from 'react'
import { string } from 'prop-types'
import { extendParentClass, extendBaseClass } from '../../utils/classes'

export class Header extends Component {
  static propTypes = {
    title: string.isRequired,
    html: string,
  }

  baseClass = extendParentClass.bind(this)('header')

  extend = extendBaseClass.bind(this)

  render() {
    const { title, html } = this.props
    return (
      <div className={this.baseClass}>
        <h1>{title}</h1>
        {html && (
          <p
            dangerouslySetInnerHTML={{ __html: html }}
            className={this.extend('description')}
          />
        )}
      </div>
    )
  }
}

export default Header
