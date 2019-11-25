import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"


import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query PortfolioDataQuery {
        site {
          siteMetadata {
            social {
              github
            }
          }
        }
        allFile(filter: {extension: {regex: "/(jpeg|jpg|gif|png)/"}, sourceInstanceName: {eq: "blog"}, name: {regex: "/portfolio/"}}, sort: {fields: name, order: DESC}) {
          edges {
            node {
              childImageSharp {
                fluid (maxWidth: 500, maxHeight: 500, quality: 100){
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
                id
              }
              name
              relativeDirectory
            }
          }
        }
      }
    `}
    render={data => (
      <DefaultLayout>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        <p>
          This is just a part of some open source projects in which I'm involved in.
          There are more projects and contributions on <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
            target="_blank" rel="noopener noreferrer">
          my GitHub profile</a>.
        </p>

        {data.allFile.edges.map(node=>{
          let name = node.node.name
          name = name.split("_")
          name = name.slice(2, name.length)
          name = name.join(" ")
          return(
            <Link to={"/"+node.node.relativeDirectory} className="portfolio-image-container" key={node.node.childImageSharp.id+"a"}>
              <Img
                className="portfolio-image"
                key={node.node.childImageSharp.id}
                fluid={node.node.childImageSharp.fluid}
                sizes={node.node.childImageSharp.sizes}
                alt="Photo">
              </Img>
              <div className="portfolio-image-overlay" key={node.node.childImageSharp.id+"b"}>
                <div className="portfolio-image-text" key={node.node.childImageSharp.id+"c"}>{name}</div>
              </div>
            </Link>
          )
        })}
      </DefaultLayout>
    )}
  />
)

export default Portfolio
