import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from '/src/components/SearchResult/SearchResult'
// TODO: Consumo de dados, estilização do material UI

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>
          62 estadias · 26 de agosto a 30 de agosto · 2 hóspedes
        </p>
        <h2>Fique por perto</h2>
        <Button variant='outlined'>Flexibilidade de Cancelamento</Button>
        <Button variant='outlined'>Tipo de lugar</Button>
        <Button variant='outlined'>Preço</Button>
        <Button variant='outlined'>Quartos e camas</Button>
        <Button variant='outlined'>Mais filtros</Button>
      </div>
      <div className='searchPage_resultsBox'>
        <SearchResult
                  img="https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  location="Centro de Lambeth"
                  title="Apartamento Espaçoso em Londres"
                  description="6 hospedes · 2 Quartos · 4 Camas · 2 Banheiros· Wifi · Cozinha · Estacionamento Grátis · Maquina de lavar"
                  star={4.73}
                  price="£30 / Noite"
                  total="£117 total"
              />
        <SearchResult
                  img="https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  location="Centro de Lambeth"
                  title="Apartamento Espaçoso em Londres"
                  description="6 hospedes · 2 Quartos · 4 Camas · 2 Banheiros· Wifi · Cozinha · Estacionamento Grátis · Maquina de lavar"
                  star={4.73}
                  price="£30 / Noite"
                  total="£117 total"
              />
        <SearchResult
                  img="https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  location="Centro de Lambeth"
                  title="Apartamento Espaçoso em Londres"
                  description="6 hospedes · 2 Quartos · 4 Camas · 2 Banheiros· Wifi · Cozinha · Estacionamento Grátis · Maquina de lavar"
                  star={4.73}
                  price="£30 / Noite"
                  total="£117 total"
              />
      </div>
    </div>
  )
}

export default SearchPage