import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsContent from "../components/Skills"


const SkillsPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Aitor`, `Alonso`, `computer`, `science`, `engineering`, `Madrid`, `developer`, `skills`]} />
    <SkillsContent />
  </Layout>
)

export default SkillsPage
