import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/layout'
import Products from '../components/Products'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container direction="row" justify="center" alignItems="center">
        <Products />
      </Grid>
    </Layout>
  )
}

export default IndexPage
