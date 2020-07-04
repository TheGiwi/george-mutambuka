import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../../../styles/index.scss'

export class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
