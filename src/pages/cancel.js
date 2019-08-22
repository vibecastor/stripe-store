import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CancelPage = () => (
  <Layout>
    <h1>Order Cancelled</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
