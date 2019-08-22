import React, { useState } from 'react'
import Layout from '../components/layout'
import Products from '../components/Products'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Products />
      </div>
    </Layout>
  )
}

export default IndexPage
