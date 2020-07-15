import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { string } from 'prop-types'
import Nav from './Nav'
import Footer from './Footer'
import '../../../styles/index.scss'

export class Layout extends Component {
  static propTypes = {
    isNavFixed: Nav.propTypes.isNavFixed,
    title: string.isRequired,
  }

  render() {
    const { children, isNavFixed, title } = this.props
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Nav isNavFixed={isNavFixed} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
