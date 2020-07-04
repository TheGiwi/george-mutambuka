import React, { Component } from 'react'
import { Link } from 'gatsby'

export class Links extends Component {
  links = [
    {
      children: `Home`,
      to: `/`,
    },
    {
      children: `Portfolio`,
      to: `/portfolio`,
    },
    {
      children: `Contact`,
      to: `/contact`,
    },
  ]

  renderLink = (linkData, index) => (
    <li className="nav-item" key={index}>
      <Link {...linkData} className="nav-link mx-3 text-light" />
    </li>
  )

  renderLinks = () => this.links.map(this.renderLink)

  render() {
    return <ul className="navbar-nav ml-auto">{this.renderLinks()}</ul>
  }
}

export default Links
