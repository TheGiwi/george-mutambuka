import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../../../styles/index.scss'

export class Layout extends Component {
  static propTypes = {
    isNavFixed: Nav.propTypes.isNavFixed,
  }

  render() {
    const { children, isNavFixed } = this.props
    return (
      <div>
        <Nav isNavFixed={isNavFixed} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
