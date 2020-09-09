import React, { Component } from 'react'
import Layout from '../../components/common/Layout'
import { extendBaseClass } from '../../utils/classes'
import Form from './Form'

export class Contact extends Component {
  baseClass = 'contact'

  extend = extendBaseClass.bind(this)

  render() {
    const email = 'george@thegiwi.com'
    return (
      <Layout title="Contact">
        <div className={this.baseClass}>
          <div className={this.extend('header')}>
            <h1>Contact me</h1>
            <p>
              CONTACT FORM IS CURRENTLY HAVING SENDING ISSUES SO PLEASE E-MAIL ME AT {' '}
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
