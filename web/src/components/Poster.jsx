import React from 'react'

import { v4 as uuidv4 } from 'uuid';

import { pecas } from '../tools/inExhibi'
import Hovercard from './Hovercard';

import './poster.css'

const Poster = () => {

  const alertMessage = (movieName, moviePrice) => {

    alert(`Comprou ${movieName} custou ${moviePrice} e seu ingresso ${uuidv4()}`)
  }

  console.log(pecas.map((item, index) => {
    item.elenco.nome.toString()
  }))

  return (
    <div className="container_cartaz">
      <div className="box_movies">
        {pecas.map((item, index) => (
          <div className='movie' key={index}>
            <div className="container_movie">
              <span>
                <Hovercard imgPoster={item.cartaz} Title={item.name} Sinopse={item.sinopse} Elenco={item.elenco.nome} />
              </span>
              <div className="box">
                <h2>Nome: {item.name}</h2>
                <span>Tema: {item.tema}</span>
                <span>Classificação: {item.classificacao}</span>
                <span>Preço: {item.preco}</span>
                <span>Mais informações no card.</span>
              </div>
              <button onClick={() => alertMessage(item.name, item.preco)} className="btnBuy">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Poster