import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const formatDate = (date) => {
  const month = date.toLocaleString('en-US', { month: 'short' })
  const dateNumber = date.getDate()
  const year = date.getFullYear()
  return `Published ${month} ${dateNumber}, ${year}`
}

const PostCard = ({ post }) => {
  const url = `/blog${post.fields.slug}`
  const readingTime = readingTimeHelper(post)
  // const author = 'George Mutambuka'
  const { thumbnail, title, date } = post.frontmatter
  const formattedDate = formatDate(new Date(date))
  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {thumbnail && (
          <Image
            className="post-card-image"
            fluid={thumbnail.childImageSharp.fluid}
          />
        )}
        <h2 className="post-card-title">{title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">{formattedDate}</div>
        <div className="post-card-footer-right">
          <div>{readingTime}</div>
        </div>
      </footer>
    </Link>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.object.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostCard
