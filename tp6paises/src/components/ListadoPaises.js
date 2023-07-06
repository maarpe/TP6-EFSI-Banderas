import React from 'react'
import { arrayOf } from 'prop-types'
import { PaisShape } from '../shapes'
import Pais from './Pais'

function ListadoPaises({ paises }) {
  return (
    <>
      {paises.map((pais, index) => { //crea un componente país con los elementos de abajo
        <Pais
          key={index}
          pais={pais}
        />
      })}

    </>
  )
}

ListadoPaises.propTypes = {
  pais: arrayOf(PaisShape)
}

export default ListadoPaises
