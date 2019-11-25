import { Link } from 'gatsby'
import React from 'react'

const Topbar = ({ siteMetadata }) => (
  <>
    <nav className="topbar">
      <ul className="list-links">
        {siteMetadata.menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link} className="nav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
)

export default Topbar
