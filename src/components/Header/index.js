import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Search } from './styles'

import logo from '../../assets/images/Logo_ML.png'

export default function Header() {
  const [term, setTerm] = useState('')

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      document.getElementById('search').click()
    }
  }

  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="Mercado Livre" />
        </Link>

        <Search>
          <input
            type="text"
            placeholder="Nunca deixe de buscar"
            onChange={e => setTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Link to={`/search/${term}`} id="search">
            Pesquisar
          </Link>
        </Search>
      </div>
    </Container>
  )
}
