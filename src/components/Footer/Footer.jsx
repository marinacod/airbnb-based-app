import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p>&#169; Airbnb clone!</p>
          <ul className='footer__list'>
            <li><a href='#'>Privacidade</a> · </li>
            <li><a href='#'>Termos</a> · </li>
            <li><a href='#'>Mapa do site</a> · </li>
            <li><a href='#'>Detalhes da empresa</a></li>
          </ul>
      </div>
        <p>Nenhum direito reservado - esta é uma demonstração!</p>
    </footer>
  )
}

export default Footer