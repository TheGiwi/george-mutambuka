import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import links from '../../links'

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const Navigation = ({ data, navClass }) => (
  <>
    {links.map((navItem, i) => {
      if (navItem.to.match(/^\s?http(s?)/gi)) {
        return (
          <a
            className={navClass}
            href={navItem.to}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navItem.children}
          </a>
        )
      } else {
        return (
          <Link className={navClass} to={navItem.to} key={i}>
            {navItem.children}
          </Link>
        )
      }
    })}
  </>
)

Navigation.defaultProps = {
  navClass: `site-nav-item`,
}

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  navClass: PropTypes.string,
}

export default Navigation
