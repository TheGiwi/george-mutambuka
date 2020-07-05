import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { shape, object, arrayOf } from 'prop-types'
import Layout from '../../components/common/Layout'
import Item from './Item'

export class Portfolio extends Component {
  baseClass = 'portfolio'

  static propTypes = {
    data: shape({
      allMarkdownRemark: shape({
        edges: arrayOf(object).isRequired,
      }).isRequired,
    }).isRequired,
  }

  renderItem = (edge, index) => (
    <Item {...edge.node} key={index} parentClass={this.baseClass} />
  )

  renderItems = () =>
    this.props.data.allMarkdownRemark.edges.map(this.renderItem)

  render() {
    return (
      <Layout>
        <div className={this.baseClass}>{this.renderItems()}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              colors {
                ...GatsbyImageColors
              }
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio
