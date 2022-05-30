import './App.css';
import { useState } from 'react';

import HomePage from './components/Home';
import HomePage2 from './components/HomePage2';

function App() {

  const [listTransactions, setListTransactions] = useState([
])

  const [ iniciar, setIniciar ] = useState(false)

  const [mostrarEntrada, setMostrarEntrada] = useState(true)

  const [mostrarSaida, setMostrarSaida] = useState(true)

  return (
    <div className='App'>
      {!iniciar ? <HomePage iniciar={iniciar} setIniciar = { setIniciar }/> : <HomePage2 listTransactions={ listTransactions } setListTransactions={ setListTransactions } iniciar={iniciar} setIniciar = { setIniciar } mostrarEntrada = { mostrarEntrada } setMostrarEntrada = { setMostrarEntrada } mostrarSaida = { mostrarSaida } setMostrarSaida = { setMostrarSaida }/>}
    </div>
  );
}

export default App;
