import React from "react"
import { css } from "glamor"

import PageTitle from "../PageTitle"

const styles = css({
  margin: 0,
  padding: 0,
  display: `inline-block`,
  textAlign: `center`,
  listStyle: `none`,
})

export default class SkillsContent extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Portfolio</PageTitle>
        <p>
          That's just a part of some open source projects in which I'm involved in.
          There are more projects and contributions on <a rel="noopener noreferrer" target="__blank" href="https://github.com/tairosonloa">my GitHub profile</a>.
        </p>

        <article>
          <h2>This site source code</h2>
          <p>
            All the source code of this site is open and provided on a GitHub repository under the <a rel="noopener noreferrer" target="__blank" href="https://github.com/tairosonloa/aalonso.eu/blob/master/LICENSE">GNU AGPLv3 license</a>.
            It's made using React and GatsbyJS.
          </p>
          <a rel="noopener noreferrer" target="__blank" href="https://github.com/tairosonloa/aalonso.eu">https://github.com/tairosonloa/aalonso.eu</a>
        </article>

        <article>
          <h2>Python 3 script to download the content from UC3M Aula Global courses</h2>
          <p>
          I made a script to download all the content from UC3M Aula Global courses, the virtual classroom used by my university (Moodle).
          It uses the Moodle API to log in a user, view its subjects, and download the files within storing it in folders with the subject name.
          </p>
          <a rel="noopener noreferrer" target="__blank" href="https://github.com/tairosonloa/Aula_Global_UC3M">https://github.com/tairosonloa/Aula_Global_UC3M</a>
        </article>

        <article>
          <h2>LaTeX template for UC3M documents</h2>
          <p>
          I made a LaTeX template I use for all my works reports and expositions on my university, Universidad Carlos III de Madrid (UC3M).
          Anyone who desires can use it free of charge.
          </p>
          <a rel="noopener noreferrer" target="__blank" href="https://github.com/tairosonloa/UC3M_LaTeX_template">https://github.com/tairosonloa/UC3M_LaTeX_template</a>
        </article>
      </section>
    )
  }
}