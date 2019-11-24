import React from 'react'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class MyWork extends React.Component {
  render() {
    const { data } = this.props

    return (
      <DefaultLayout>
        <SEO title="My work" />
        <h1>That page doesn&#39;t exist.</h1>
        <br />
      </DefaultLayout>
    )
  }
}

export default MyWork
