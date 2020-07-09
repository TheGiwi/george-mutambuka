import React, { Component } from 'react'
import Layout from '../../components/common/Layout'
import { extendBaseClass } from '../../utils/classes'
import Form from './Form'

export class Contact extends Component {
  baseClass = 'contact'

  extend = extendBaseClass.bind(this)

  render() {
    const email = 'email@gmail.com'
    return (
      <Layout>
        <div className={this.baseClass}>
          <div className={this.extend('header')}>
            <h1>Contact me</h1>
            <p>
              Contact me using the form below or email me at{' '}
              <a href={`mailto:${email}`}>{email} </a>
            </p>
          </div>
          <Form parentClass={this.baseClass} />
        </div>
      </Layout>
    )
  }
}

export default Contact
