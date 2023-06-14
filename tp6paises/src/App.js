import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [paises, setPaises] = useState([]);
  const [randomPais, setRandom] = useState({});

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        const paisesResponse = response.data.data;
        setPaises(paisesResponse);

        const randomPais = paisesResponse[Math.floor(Math.random() * paisesResponse.length)];
        setRandom(randomPais);
      });
    
  }, []);

  let cambiarPais = () => {
    let id = Math.floor(Math.random() * (paises.length + 1));
    setPaises(paises[id]);
  }

  useEffect(() => {
    if(nombre === randomPais.name){
      contador = contador + 10;
      cambiarPais();
    }
    else{
      if(contador > 0) setContador(contador - 1);
    }
  })
  
  return (
    <div className='App-header'>
      <div className='container'>
        {randomPais.flag ? <img src={randomPais.flag} /> : <div></div>}
        <div className='botonSubmit'>
          <input type="text" class="form-control" placeholder="Nombre bandera" onSubmit={(e) => setNombre(e.target.value)} />
          <button onSubmit={contador}>Ver si es correcto</button>
          <div className='contador'>
            PUNTOS: {contador}
          </div>
        </div>


      </div>
    </div>

  );
}

export default App;
