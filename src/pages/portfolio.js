import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioContent from "../components/Portfolio"


const PortfolioPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Aitor`, `Alonso`, `computer`, `science`, `engineering`, `Madrid`, `developer`, `portfolio`, `projects`, `work`]} />
    <PortfolioContent />
  </Layout>
)

export default PortfolioPage
