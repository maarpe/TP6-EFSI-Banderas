import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [paises, setPaises] = useState([]);
  const [randomPais, setRandom] = useState({});
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        const paisesResponse = response.data.data;
        setPaises(paisesResponse);

        const randomPais = paisesResponse[Math.floor(Math.random() * paisesResponse.length)];
        setRandom(randomPais);
      });
    
  }, []);

  useEffect(() => {
    setTimeout(function() {
      if (timer > 0) {
        console.log(timer);
        setTimer(timer - 1);
      } else {
        console.log("¡Tiempo terminado!");
        setTimer(15);
        cambiarPais();
      }
    }, 1000);
  }, [timer]);

  let cambiarPais = () => {
    let id = Math.floor(Math.random() * (paises.length + 1));
    setRandom(paises[id]);
    if(contador > 0) setContador(contador - 1);
  }

  let validarNombre = (e) => {
    if(nombre === randomPais.name){
      setContador(10);
    } else{
      if(contador > 0) setContador(contador - 1);
    }
    cambiarPais();
    setNombre('');
  }
  
  return (
    <div className='App-header'>
      <p className='timer'>{timer}</p>
      <div className='container'>
        {randomPais.flag ? <img src={randomPais.flag} /> : <div></div>}
        <div className='botonSubmit'>
          <input type="text" className="form-control" placeholder="Nombre bandera" onKeyUp={(e) => setNombre(e.target.value)} />
          <button onClick={(e) => validarNombre(e)}>Ver si es correcto</button>
          <button className='skip' onClick={() => cambiarPais()}>Skip</button>
          <div className='contador'>
            PUNTOS: {contador}
          </div>
        </div>


      </div>
    </div>

  );
}

export default App;
