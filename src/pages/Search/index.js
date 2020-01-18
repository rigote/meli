import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Container } from './styles'

import Breadcrumbs from '../../components/Breadcrumbs'
import shipping from '../../assets/images/ic_shipping.png'

import api from '../../services/api'

export default function Search() {
  const { products, setProducts } = useState([])
  const { q } = URLSearchParams()
  console.log(useLocation().search)

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/sites/MLB/search?q=${q}`)
      console.log(response)

      setProducts(response.data.results)
    }

    loadProduct()
  }, [q, setProducts])

  return (
    <Container>
      <Breadcrumbs />

      <div className="container">
        {products.map(product => (
          <Link to={`/Details/${product.id}`}>
            <div className="wrap" key={product.id}>
              <div className="product-picture">
                <img
                  src={product.thumbnail.replace('-I.', '-O.')}
                  alt={product.title}
                />
              </div>
              <div>
                <p>
                  <strong>
                    {product.price}
                    {product.shipping.free_shipping ? (
                      <img src={shipping} alt="Frete Grátis" />
                    ) : (
                      ''
                    )}
                  </strong>
                  <small>{product.address.state_name}</small>
                </p>
                <span>{product.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
