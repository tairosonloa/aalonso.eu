import { Link } from 'gatsby'
import React from 'react'


const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src="/me.jpg" alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <p className="bio">{siteMetadata.description}</p>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contact me</h3>
          <ul>
            {siteMetadata.social.twitter && (
              <li>
                <a
                  href={`https://twitter.com/${siteMetadata.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.facebook && (
              <li>
                <a
                  href={`https://facebook.com/${siteMetadata.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.cv && (
              <li>
                <a href={`/CV/${siteMetadata.social.cv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-file-pdf-o" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
            <br/>
            Made with <i className="fa fa-heart" aria-hidden="true" /> with <a
              href={`https://www.gatsbyjs.org/`}
              target="_blank"
              rel="noopener noreferrer">GatsbyJS</a>.
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
