import React from "react"
import { Link } from "gatsby"
import { css } from "glamor"

import PageTitle from "../PageTitle"
import Devicon from "./devicon"

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
        <PageTitle>My skills</PageTitle>
        <p>
          Those are the technologies I know, with which I work or I've worked for a reasonable amount
          of time. You can check my resume or my LinkedIn profile in the <Link to="/">About page</Link>.
          Also, take a look at my <Link to="/portfolio">Portfolio</Link>.
        </p>
        
        <h2>Backend</h2>
        <div style={{textAlign: `center`}}>
          <ul {...styles}>
            <Devicon name={`c-original`} size={`50`} color={`0645ad`} description={`C`}/>
            <Devicon name={`cplusplus-original`} size={`50`} color={`0645ad`}description={`C++`}/>
            <Devicon name={`java-original`} size={`50`} color={`0645ad`} description={`Java`}/>
            <Devicon name={`python-original`} size={`50`} color={`0645ad`} description={`Python`}/>
            <Devicon name={`go-original`} size={`50`} color={`0645ad`} description={`Go`}/>
            <Devicon name={`nodejs-original`} size={`50`} color={`0645ad`} description={`NodeJS`}/>
          </ul>
        </div>

        <h2>Frontend</h2>
        <div style={{textAlign: `center`}}>
          <ul {...styles}>
            <Devicon name={`html5-original`} size={`50`} color={`0645ad`} description={`HTML5`}/>
            <Devicon name={`css3-original`} size={`50`} color={`0645ad`} description={`CSS3`}/>
            <Devicon name={`javascript-original`} size={`50`} color={`0645ad`} description={`JavaScript`}/>
            <Devicon name={`typescript-original`} size={`50`} color={`0645ad`} description={`TypeScript`}/>
            <Devicon name={`sass-original`} size={`50`} color={`0645ad`} description={`Saas`}/>
            <Devicon name={`jquery-original`} size={`50`} color={`0645ad`} description={`JQuery`}/>
            <Devicon name={`angularjs-original`} size={`50`} color={`0645ad`} description={`Angular`}/>
            <Devicon name={`react-original`} size={`50`} color={`0645ad`} description={`React`}/>
          </ul>
        </div>

        <h2>Databases</h2>
        <div style={{textAlign: `center`}}>
          <ul {...styles}>
            <Devicon name={`mysql-original`} size={`50`} color={`0645ad`} description={`Mysql`}/>
            <Devicon name={`postgresql-original`} size={`50`} color={`0645ad`} description={`PostgreSQL`}/>
            <Devicon name={`oracle-original`} size={`50`} color={`0645ad`} description={`Oracle`}/>
          </ul>
        </div>

        <h2>Environment</h2>
        <div style={{textAlign: `center`}}>
          <ul {...styles}>
            <Devicon name={`debian-original`} size={`50`} color={`0645ad`} description={`Debian`}/>
            <Devicon name={`windows8-original`} size={`50`} color={`0645ad`} description={`Windows10`}/>
            <Devicon name={`nginx-original`} size={`50`} color={`0645ad`} description={`Nginx`}/>
            <Devicon name={`docker-original`} size={`50`} color={`0645ad`} description={`Docker`}/>
          </ul>
        </div>

        <h2>Tools</h2>
        <div style={{textAlign: `center`}}>
          <ul {...styles}>
            <Devicon name={`git-original`} size={`50`} color={`0645ad`} description={`Git`}/>
            <Devicon name={`github-original`} size={`50`} color={`0645ad`} description={`GitHub`}/>
            <Devicon name={`gradle-plain`} size={`50`} color={``} description={`Gradle`}/>
            <Devicon name={`slack-original`} size={`50`} color={`0645ad`} description={`Slack`}/>
            <Devicon name={`vim-original`} size={`50`} color={`0645ad`} description={`Vim`}/>
            <Devicon name={`visualstudio-plain`} size={`50`} color={`0645ad`} description={`VS Code`}/>
          </ul>
        </div>
      </section>
    )
  }
}