import React from "react"

import AboutContent from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Aitor`, `Alonso`, `computer`, `science`, `engineering`, `Madrid`, `developer`, `about`]} />
    <AboutContent key="about" />
  </Layout>
)

export default AboutPage