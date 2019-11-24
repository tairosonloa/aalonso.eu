import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

const MyWork = () => (
  <StaticQuery
    query={graphql`
      query WorkDataQuery {
        site {
          siteMetadata {
            social {
              github
            }
            documents {
              tfg
            }
          }
        }
      }
    `}
    render={data => (
      <DefaultLayout>
        <SEO title="My work" />
        <p>
          That's just a part of some open source projects in which I'm involved in.
          There are more projects and contributions on <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
            target="_blank" rel="noopener noreferrer">
          my GitHub profile</a>.
        </p>

         <article className="project">
          <h2>My Bachelor's Degree thesis</h2>
          <p>
            I made a system to monitor the status of the service of the laboratory of the Computer Engineering Department at my university
            (Universidad Carlos III de Madrid) as my Bachelor's Degree thesis. <strong>I got a grade of 10 with a distinction of Honor</strong>,
            which makes me highly proud of it. The implementation and the thesis report (in Spanish) can be found at the links below.
          </p>
          <ul className="js js-ul">
          <li>Project repository: <a className="break-urls" rel="noopener noreferrer" target="_blank" href="https://github.com/tairosonloa/bachelor_degree_thesis">https://github.com/tairosonloa/bachelor_degree_thesis</a><br/></li>
          <li>Spanish thesis: <a className="break-urls" href={`${data.site.siteMetadata.documents.tfg}`}target="_blank" rel="noopener noreferrer">click to view the PDF.</a></li>
          </ul>
        </article>


         <article className="project">
          <h2>This site source code</h2>
          <p>
            All the source code of this site is open and provided on a GitHub repository under the <a rel="noopener noreferrer" target="_blank" href="https://github.com/tairosonloa/aalonso.eu/blob/master/LICENSE">GNU AGPLv3 license</a>.
            It's made using React and GatsbyJS.
          </p>
          <a className="break-urls" rel="noopener noreferrer" target="_blank" href="https://github.com/tairosonloa/aalonso.eu">https://github.com/tairosonloa/aalonso.eu</a>
        </article>


         <article className="project">
          <h2>Python 3 script to download the content from UC3M Aula Global courses</h2>
          <p>
          I made a script to download all the content from UC3M Aula Global courses, the virtual classroom used by my university (Moodle).
          It uses the Moodle API to log in a user, view its subjects, and download the files within storing it in folders with the subject name.
          </p>
          <a className="break-urls" rel="noopener noreferrer" target="_blank" href="https://github.com/tairosonloa/Aula_Global_UC3M">https://github.com/tairosonloa/Aula_Global_UC3M</a>
        </article>


         <article className="project">
          <h2>LaTeX template for UC3M documents</h2>
          <p>
          I made a LaTeX template I use for all my works reports and expositions on my university, Universidad Carlos III de Madrid (UC3M).
          Anyone who desires can use it free of charge.
          </p>
          <a className="break-urls" rel="noopener noreferrer" target="_blank" href="https://github.com/tairosonloa/UC3M_LaTeX_template">https://github.com/tairosonloa/UC3M_LaTeX_template</a>
        </article>
      </DefaultLayout>
    )}
  />
)

export default MyWork
