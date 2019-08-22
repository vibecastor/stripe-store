import React, { useState } from 'react'

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
    <article>
      <img src="https://picsum.photos/300/400" alt="t-shirt" />
      <h3>{product.name}</h3>
      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(edge => (
          <option key={edge.node.id} value={edge.node.id}>
            {edge.node.attributes.name}
          </option>
        ))}
      </select>
      <button onClick={placeOrder}>Purchase</button>
    </article>
  )
}

export default Product
