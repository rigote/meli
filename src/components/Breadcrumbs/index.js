import React from 'react'

import { Container } from './styles'

export default function Breadcrumbs({ categoryTree }) {
  return (
    <Container>
      <ul>
        {categoryTree.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </Container>
  )
}
