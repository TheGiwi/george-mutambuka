import React, { Component } from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { shape, string, arrayOf, object } from 'prop-types'

import YouTube from './Youtube'
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
          youtube: string,
        }),
      }),
    }),
  }

  baseClass = 'details'

  extend = extendBaseClass.bind(this)

  contentClass = this.extend('content')

  renderYoutube = () => {
    const { youtube } = this.props.data.markdownRemark.frontmatter
    if (youtube) {
      return <YouTube youtube={youtube} parentClass={this.contentClass} />
    }
    return null
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark
    const { title, images, modelIframe } = frontmatter
    return (
      <Layout>
        <div className={this.baseClass}>
          <Header parentClass={this.baseClass} title={title} html={html} />
          <div className={this.contentClass}>
            <Images images={images} parentClass={this.baseClass} />
            <div
              dangerouslySetInnerHTML={{ __html: modelIframe }}
              className={extend(this.contentClass, 'model')}
            />
            {this.renderYoutube()}
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
        youtube
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
{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/AN4kmbJLCec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}

export default Project
