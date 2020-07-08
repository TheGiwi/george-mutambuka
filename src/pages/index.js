import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/common/Layout'
import { MetaData } from '../components/common/meta'
import Carousel from './Home/Carousel'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ location }) => {
  const baseClass = 'home'
  return (
    <>
      <MetaData location={location} />
      <Layout isHome={true}>
        <div className={baseClass}>
          <Carousel />
        </div>
      </Layout>
    </>
  )
}

Index.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Index
