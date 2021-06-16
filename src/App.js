import React, { useState } from 'react';
import Cep from './components/cep';
import './App.css';
import localizacao from './img/pinlocalizacao.png'

const App = () => {
  const [cep, setCep] = useState(null);  const [informacao, setinformacao] = useState(null);
  const [loadingCep, setloadingCep] = useState(null);
  async function click() {

    if (cep) {

      setloadingCep(true);
      const apiCep = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`,
      );

      const conectaApi = await apiCep.json();
      setinformacao(conectaApi)
      setloadingCep(false)

    }
  }
  return (
    <div className="App-header">
      <img src={localizacao} />
      <h1> Busca CEP Brasil</h1>
      <input onChange={e => setCep(e.target.value)} value={cep}></input>
      <button onClick={click}>Pesquisar</button>
      
      {loadingCep && <p> Loading...</p>}
      {!loadingCep && informacao &&
        <Cep informacao={informacao} />}
       

    </div>
  );
};

export default App;