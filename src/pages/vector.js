import React, { Component } from 'react'
import Results from '../components/common/Results'

export class VectorProjects extends Component {
  render() {
    return <Results title="Vector Projects" {...this.props} />
  }
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { ne: "3d" } } }) {
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

export default VectorProjects
