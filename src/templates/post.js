import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/common/BlogLayout'
import { MetaData } from '../components/common/meta'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.markdownRemark
  const { title, thumbnail } = post.frontmatter

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Layout>
        <div className="container">
          <article className="content">
            {thumbnail ? (
              <figure className="post-feature-image">
                <Image fluid={thumbnail.childImageSharp.fluid} alt={title} />
              </figure>
            ) : null}
            <section className="post-full-content">
              <h1 className="content-title">{title}</h1>

              {/* The main post content */}
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </section>
          </article>
        </div>
      </Layout>
    </>
  )
}

Post.propTypes = {
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
