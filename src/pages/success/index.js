import React, { Component } from 'react'
import Layout from '../../components/common/Layout'
import { Link } from 'gatsby'
import successImg from './success.svg'
import { extendBaseClass } from '../../utils/classes'

export class Success extends Component {
  baseClass = 'success'

  extend = extendBaseClass.bind(this)

  render() {
    return (
      <Layout>
        <div className={this.baseClass}>
          <img
            src={successImg}
            alt="Message sent"
            className={this.extend('image')}
          />
          <div>
            <h1>Message Successfully Sent</h1>
            <Link to="/" className={this.extend('link')}>
              Go back home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Success
