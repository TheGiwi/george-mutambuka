import React, { Component } from 'react'
import { shape, object, arrayOf, string } from 'prop-types'
import Layout from '../Layout'
import Item from './Item'
import { extendBaseClass } from '../../../utils/classes'

export class Portfolio extends Component {
  baseClass = 'portfolio'

  static propTypes = {
    data: shape({
      allMarkdownRemark: shape({
        edges: arrayOf(object).isRequired,
      }).isRequired,
    }).isRequired,
    title: string.isRequired,
  }

  extend = extendBaseClass.bind(this)

  listClass = this.extend('list')

  renderItem = (edge, index) => (
    <Item {...edge.node} key={index} parentClass={this.listClass} />
  )

  renderItems = () =>
    this.props.data.allMarkdownRemark.edges.map(this.renderItem)

  render() {
    const { title } = this.props
    return (
      <Layout>
        <div className={this.baseClass}>
          <h1 className={this.extend('title')}>{title}</h1>
          <div className={this.listClass}>{this.renderItems()}</div>
        </div>
      </Layout>
    )
  }
}

export default Portfolio
