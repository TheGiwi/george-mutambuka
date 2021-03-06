import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import { Navigation } from '..'
import Icons from './Icons/index'
import logo from '../../../../static/images/logo.svg'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({
  data,
  children,
  bodyClass,
  isHome,
  title = 'Blog',
}) => {
  const site = data.allGhostSettings.edges[0].node

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <body className={bodyClass} />
        <title>{title}</title>
      </Helmet>

      <div className="viewport" id="blog-page">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header
            className="site-head"
            style={{
              ...(site.cover_image && {
                backgroundImage: `url(${site.cover_image})`,
              }),
            }}
          >
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link to="/">
                    <img className="site-logo" src={logo} alt={site.title} />
                  </Link>
                </div>
                <div className="site-mast-right">
                  <Icons parentClass="header" />
                </div>
              </div>
              {isHome ? (
                <div className="site-banner">
                  <h1 className="site-banner-title">George Mutambuka</h1>
                  <p className="site-banner-desc">
                    Professional 3D Graphics and Renders
                  </p>
                </div>
              ) : null}
              <nav className="site-nav">
                <div className="site-nav-left">
                  {/* The navigation items as setup in Ghost */}
                  <Navigation data={site.navigation} navClass="site-nav-item" />
                </div>
                <div className="site-nav-right">
                  {/* <Link className="site-nav-button" to="/about">
                    About
                  </Link> */}
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main blog-container">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with{' '}
                <a
                  className="site-foot-nav-item"
                  href="https://ghost.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ghost
                </a>
              </div>
              <div className="site-foot-nav-right">
                <Navigation
                  data={site.navigation}
                  navClass="site-foot-nav-item"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  title: string,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={(data) => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
