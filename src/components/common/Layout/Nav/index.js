import React, { Component } from 'react'
import Toggle from './Toggle'
import Links from './Links'

export class Nav extends Component {
  render() {
    const id = 'nav__content'
    return (
      <nav className="nav">
        <div className="container">
          <Toggle id={id} />
          <div className="collapse navbar-collapse" id={id}>
            <Links />
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
