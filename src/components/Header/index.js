import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Search } from './styles'

import logo from '../../assets/images/Logo_ML.png'

export default function Header() {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="Mercado Livre" />
        </Link>

        <Search>
          <input type="text" placeholder="Nunca dejes de buscar" />
          <button>Pesquisar</button>
        </Search>
      </div>
    </Container>
  )
}
