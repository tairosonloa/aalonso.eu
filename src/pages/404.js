import React from "react"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import { css } from "glamor"

import Layout from "../components/layout"
import SEO from "../components/seo"

const divStyles = css({
  display: `inline-block`,
  maxWidth: `350px`
})

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>ERROR 404 - NOT FOUND</h1>
      <div {...divStyles}>
        <p>
          It seems that you have accessed a url that does not exist.
        </p>
        <p>
          If you typed the url manually, please check it's correct.
        </p>
        <p>
          If you came here from an internal link or you are sure something was here before, please, contact me
          so I can fix this. You can find my contact details in the <Link to="/">About page</Link>.
        </p>
      </div>
      <div {...divStyles}><img src={withPrefix("/images/confused_john_travolta.gif")} alt="Confused John Travolta" /></div>
    </section>
  </Layout>
)

export default NotFoundPage
