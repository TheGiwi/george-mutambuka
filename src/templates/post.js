import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/common/BlogLayout'
import { MetaData } from '../components/common/meta'
import { extend } from '../utils/classes'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          thumbnail: PropTypes.object,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  baseClass = 'post'

  content = extend(this.baseClass, 'content')

  extendContent = (childClass) => extend(this.content, childClass)

  render() {
    const { data, location } = this.props
    const post = data.markdownRemark
    const { title, thumbnail } = post.frontmatter

    return (
      <>
        <MetaData data={data} location={location} type="article" />
        <Layout>
          <div className={this.baseClass}>
            <article className={this.content}>
              {thumbnail ? (
                <figure className={this.extendContent('image')}>
                  <Image fluid={thumbnail.childImageSharp.fluid} alt={title} />
                </figure>
              ) : null}
              <section className="post-full-content">
                <h1 className={this.extendContent('title')}>{title}</h1>

                {/* The main post content */}
                <section
                  className={this.extendContent('body')}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </section>
            </article>
          </div>
        </Layout>
      </>
    )
  }
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        thumbnail {
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
