import React, { useState } from 'react'
import { Grid, Box, Select, MenuItem, Button } from '@material-ui/core'

const Product = ({ skus, product }) => {
  const stripe = window.Stripe('pk_test_K01UjiZ2Rtl1pijrFuLV9p6900equUu6SK')
  const [sku, setSku] = useState(skus[0].node.id)

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/cancel',
    })
  }

  return (
    <Grid item component="article" xs={4}>
      <Box pt={3}>
        <img src="https://picsum.photos/100/150" alt="shirt" />
      </Box>
      <h3>{product.name}</h3>
      <label htmlFor="size-select">Choose a size</label>
      <Select
        id="size-select"
        defaultValue={sku}
        onChange={e => setSku(e.target.value)}
      >
        {skus.map(edge => (
          <MenuItem key={edge.node.id} value={edge.node.id}>
            {edge.node.attributes.name}
          </MenuItem>
        ))}
      </Select>
      <Box p={1}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={placeOrder}
        >
          Purchase
        </Button>
      </Box>
    </Grid>
  )
}

export default Product
