import React from 'react'

import { Container } from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <div className="breadcrumbs">
          <ul>
            <li>Eletrónica, Audio y Video</li>
            <li>IPod</li>
            <li>Reproductores</li>
            <li>IPod touch</li>
            <li>32 GB</li>
          </ul>
        </div>

        <div className="container">
          <List-products>
            <h1>Produto</h1>
          </List-products>
        </div>
      </Container>
    </>
  )
}
