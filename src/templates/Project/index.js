import React, { Component } from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { shape, string, arrayOf, object } from 'prop-types'

import Layout from '../../components/common/Layout'
import Images from './Images'
import Header from './Header'
import { extendBaseClass, extend } from '../../utils/classes'

export class Project extends Component {
  static propTypes = {
    data: shape({
      markdownRemark: shape({
        frontmatter: shape({
          title: string.isRequired,
          images: arrayOf(object),
          thumbnail: object.isRequired,
          modelIframe: string,
        }),
      }),
    }),
  }

  baseClass = 'details'

  extend = extendBaseClass.bind(this)

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark
    const { title, thumbnail, images, modelIframe } = frontmatter
    const contentClass = this.extend('content')
    return (
      <Layout>
        <div className={this.baseClass}>
          <Header parentClass={this.baseClass} title={title} html={html} />
          <div className={contentClass}>
            <div
              dangerouslySetInnerHTML={{ __html: modelIframe }}
              className={extend(contentClass, 'model')}
            />
            {thumbnail && (
              <Image
                fluid={thumbnail.childImageSharp.fluid}
                className={extend(contentClass, 'thumbnail')}
              />
            )}
            <Images images={images} parentClass={this.baseClass} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        modelIframe
        thumbnail {
          colors {
            ...GatsbyImageColors
          }
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        images {
          colors {
            ...GatsbyImageColors
          }
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

export default Project
