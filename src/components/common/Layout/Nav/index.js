import React, { Component } from 'react'
import { bool } from 'prop-types'
import Toggle from './Toggle'
import Links from './Links/index'
import Logo from './Logo'
import { getClassWithVariant } from '../../../../utils/classes'

export class Nav extends Component {
  baseClass = 'nav'

  static propTypes = {
    isNavFixed: bool,
  }

  getNavClasses = () => {
    const { isNavFixed } = this.props
    if (isNavFixed) {
      return getClassWithVariant('home', this.baseClass)
    }
    return this.baseClass
  }

  render() {
    const id = 'nav__content'
    return (
      <nav className={this.getNavClasses()}>
        <div className="container">
          <Logo parentClass={this.baseClass} />
          <Toggle id={id} />
          <div className="collapse navbar-collapse" id={id}>
            <Links parentClass={this.baseClass} />
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
