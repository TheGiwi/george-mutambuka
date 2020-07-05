import React, { Component } from 'react'
import Toggle from './Toggle'
import Links from './Links/index'
import Logo from './Logo'

export class Nav extends Component {
  baseClass = 'nav'

  render() {
    const id = 'nav__content'
    return (
      <nav className={this.baseClass}>
        <div className="container-fluid">
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
