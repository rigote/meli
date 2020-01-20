import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'

import { Container } from './styles'

import Breadcrumbs from '../../components/Breadcrumbs'
import shipping from '../../assets/images/ic_shipping.png'

import api from '../../services/api'
import { formatPrice } from '../../utils/format'

function Search() {
  const { term } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/sites/MLB/search?q=${term}`)

      const data = response.data.results.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProduct()
  }, [products, term])

  return (
    <Container>
      <Breadcrumbs />
      <div className="container">
        {products.slice(0, 4).map(p => (
          <div className="wrap" key={p.id}>
            <div className="product-picture">
              <Link to={`/item/${p.id}`}>
                <img src={p.thumbnail.replace('-I.', '-O.')} alt={p.title} />
              </Link>
            </div>
            <div>
              <p>
                <strong>
                  {p.priceFormatted}
                  {p.shipping.free_shipping ? (
                    <img src={shipping} alt="Frete Grátis" />
                  ) : (
                    ''
                  )}
                </strong>
                <small>{p.address.state_name}</small>
              </p>
              <span>{p.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Search
