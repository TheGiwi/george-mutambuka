import Results from '../components/common/Results'
import { graphql } from 'gatsby'
import React, { Component } from 'react'

export class ThreeDimensionalProjects extends Component {
  render() {
    return <Results {...this.props} title="3D Projects" />
  }
}

export default ThreeDimensionalProjects

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "3d" } }
        fileAbsolutePath: { regex: "/content/" }
      }
      sort: { fields: frontmatter___order }
    ) {
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
                fluid(maxWidth: 800, quality: 80) {
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
