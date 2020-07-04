import mail from './mail.svg'
import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  extendBaseClass,
  extendParentClass,
} from '../../../../../utils/classes'

export class Mail extends Component {
  baseClass = extendParentClass.bind(this)('contact-btn')

  extend = extendBaseClass.bind(this)

  render() {
    return (
      <Link to="/contact" className={this.baseClass}>
        <img src={mail} alt="Contact" className={this.extend('icon')} />
        Contact
      </Link>
    )
  }
}

export default Mail
