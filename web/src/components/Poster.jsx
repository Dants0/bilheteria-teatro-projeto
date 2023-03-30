import React from 'react'

import { v4 as uuidv4 } from 'uuid';

import { pecas } from '../tools/inExhibi'

import './poster.css'

const Poster = () => {

  const alertMessage = (movieName, moviePrice) => {

    alert(`Comprou ${movieName} custou ${moviePrice} reais e seu ingresso ${uuidv4()}`)
  }

  return (
    <div className="container_cartaz">
      <div className="box_movies">
        {pecas.map((item, index) => (
          <div className='movie' key={index}>
            <div className="container_movie">
              <span>
                <img src={item.cartaz} alt="logo" className='logo' />
              </span>
              <div className="box">
                <h2>Name: {item.name}</h2>
                <span>Tema: {item.tema}</span>
                <span>Classificação: {item.classificacao}</span>
                <span>Preço: {item.preco}</span>
                <span>Sinopse: {item.sinopse}</span>
              </div>
              <button onClick={() => alertMessage(item.name, item.preco)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Poster