import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styles'

import Breadcrumbs from '../../components/Breadcrumbs'

import api from '../../services/api'

function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`items/${id}`)

      setProduct(response.data)
    }

    loadProduct()
  }, [id])

  return (
    <Container>
      <Breadcrumbs />
      <div className="container">
        {product.title}
        {product.pictures != null && product.pictures.length > 0 ? (
          <img src={product.pictures[0].url} alt="" />
        ) : (
          ''
        )}
      </div>
    </Container>
  )
}

export default Details
