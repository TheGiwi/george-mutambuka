import React, { Component } from 'react'
import Icons from './Icons'
import Contact from './Contact'
import Copyright from './Copyright'

export class Footer extends Component {
  baseClass = 'footer'

  render() {
    return (
      <footer className={this.baseClass}>
        <Icons parentClass={this.baseClass} />
        <Contact parentClass={this.baseClass} />
        <Copyright parentClass={this.baseClass} />
      </footer>
    )
  }
}

export default Footer
