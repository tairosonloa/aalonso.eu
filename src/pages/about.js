import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'


const About = () => (
  <StaticQuery
    query={graphql`
      query AboutDataQuery {
        site {
          siteMetadata {
            social {
              linkedin
              github
              email
            }
            documents {
              cv
            }
          }
        }
      }
    `}
    render={data => (
      <DefaultLayout>
        <SEO
          title="About"
          keywords={[`about`, `fullstack`, `javascript`, `python`, `developer`, `computer`, `science`, `artificial`, `intelligence`, `business`, `big`, `data`]}
        />
        <h1>Hi, I'm Aitor!</h1>
        
        <p className="js">
          I'm a full stack developer and I'm currently studying a MSc in Computer Engineering at the
          Universidad Carlos III de Madrid, Spain. I'm graduated in Computer Science and Engineering
          from the same university since 2019, where I focused and specialized in computer science
          and computation (which means artificial intelligence and big data analysis).
        </p>
        <p className="js">
          Proactive, enthusiastic and curious. I never hesitate stepping out of my comfort zone to
          discover the unknown. What I learn in class or at work isn't enough for me, because I
          always can learn something new. Therefore, I take every free moment I have to keep learning,
          as well as improving the knowledge and skills that I have already acquired.
        </p>
        
        <h2 className="header-text">Contact me</h2>
        
        <ul className="js js-ul">
          <li>
            If you want to get in touch with me, just <a
              href={`mailto:${data.site.siteMetadata.social.mail}`}
              target="_blank" rel="noopener noreferrer">
            write me a mail
            </a> or contact me on <a
              href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
              target="_blank" rel="noopener noreferrer">
                Linkedin
            </a>.
          </li>
          <li>
            Don't forget to take a look at <a
              href={`https://github.com/${data.site.siteMetadata.social.github}`}
              target="_blank" rel="noopener noreferrer">
                my GitHub profile
            </a>!
          </li>
          <li>
            You can also <a
            href={`${data.site.siteMetadata.documents.cv}`}
            target="_blank" rel="noopener noreferrer">
              download my resume on PDF
            </a>.
            The update date of the resume is under the "Contact" section of the document.
          </li>
        </ul>
      </DefaultLayout>
    )}
  />
)

export default About
