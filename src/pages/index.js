import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutContent from "../components/About"


const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Aitor`, `Alonso`, `computer`, `science`, `engineering`, `Madrid`, `developer`, `about`]} />
    <AboutContent />
  </Layout>
)

export default IndexPage
