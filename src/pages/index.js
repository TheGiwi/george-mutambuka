import React from 'react'
import PropTypes, { object, shape } from 'prop-types'

import Layout from '../components/common/Layout'
import { MetaData } from '../components/common/meta'
import Carousel from './Home/Carousel/index'
import { graphql } from 'gatsby'
import { dataTypes } from './Home/types'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ location, data }) => {
  const baseClass = 'home'
  const { ship, kitchen, krkSystems } = data
  return (
    <>
      <MetaData location={location} />
      <Layout isNavFixed={true}>
        <div className={baseClass}>
          <Carousel ship={ship} kitchen={kitchen} krkSystems={krkSystems} />
        </div>
      </Layout>
    </>
  )
}

Index.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: object,
  data: shape(dataTypes),
}

export const pageQuery = graphql`
  {
    ship: file(name: { eq: "Ship_render4" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kitchen: file(name: { eq: "kitchen_rend026" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    krkSystems: file(name: { eq: "Render_SPKR4" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
