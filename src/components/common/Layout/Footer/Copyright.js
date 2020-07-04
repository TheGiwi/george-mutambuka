import React, { Component } from 'react'
import { extendParentClass } from '../../../../utils/classes'

export class Copyright extends Component {
  baseClass = extendParentClass.bind(this)('copyright')

  render() {
    const year = new Date().getFullYear()
    return (
      <span className={this.baseClass}>&copy; {year}. All rights reserved</span>
    )
  }
}

export default Copyright
