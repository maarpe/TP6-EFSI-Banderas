import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[ contador, setContador] = useState(0);
  const [ nombre, setNombre ] = useState('');
  const [Pais, setPais] = useState('');
  const [randomPais, setRandom] = useState(0);

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        setPais(response.data.data);
        console.log(response);
      });


      setRandom(Math.floor(Math.random() * 220));
      console.log(randomPais);
  
  
    },[]);

  return(
    <div>
      {nombre} <br></br> 
     <input type="text" class="form-control" placeholder="Nombre bandera" onKeyUp={(e) => setNombre(e.target.value)} />
     
      <button onSubmit={contador}>Ver si es correcto</button>


    </div>


  );








}

export default App;
