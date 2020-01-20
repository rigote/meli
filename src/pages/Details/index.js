import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styles'

import Breadcrumbs from '../../components/Breadcrumbs'

import api from '../../services/api'
import { formatPrice } from '../../utils/format'

function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [description, setDescription] = useState({})

  useEffect(() => {
    async function loadProduct() {
      const resProduct = await api.get(`items/${id}`)

      setProduct(resProduct.data)
    }

    async function loadDescription() {
      const resDescription = await api.get(`items/${id}/description`)

      setDescription(resDescription.data)
    }

    loadProduct()
    loadDescription()
  }, [id, product.category_id])

  return (
    <Container>
      <Breadcrumbs />
      <div className="container">
        <div className="productInfo">
          <div className="picture">
            {product.pictures != null && product.pictures.length > 0 ? (
              <img src={product.pictures[0].url} alt="" />
            ) : (
              ''
            )}
            <div className="description">
              <strong>Descrição do produto</strong>
              <p>{description.plain_text}</p>
            </div>
          </div>
          <div className="info">
            <small>
              {product.condition} - {product.sold_quantity} vendidos
            </small>
            <span>{product.title}</span>
            <strong>{formatPrice(product.price)}</strong>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Details
