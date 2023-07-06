import React from 'react'
import { PaisShape } from '../shapes';

function Pais({pais}) {
  const {imagen} = pais;
  return (
    <div>
        <img>{imagen}</img>
    </div>
  )
}

Pais.propTypes = {
    pais:PaisShape
}

export default Pais
