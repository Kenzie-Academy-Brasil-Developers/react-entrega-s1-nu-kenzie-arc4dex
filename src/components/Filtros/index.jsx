import './style.css'

function Nav({ setMostrarEntrada, setMostrarSaida }){

  function entrada(){
    setMostrarEntrada(true)
    setMostrarSaida(false)
  }

  function saida(){
    setMostrarSaida(true)
    setMostrarEntrada(false)
  }

  function todos(){
    setMostrarSaida(true)
    setMostrarEntrada(true)
  }

  return(
    <nav className="barraNav">
      <h2>Resumo finaceiro</h2>
      <section className="containerButtons">
        <button className="btnNav" onClick={ todos } >Todos</button>
        <button className="btnNav" onClick={ entrada }>Entradas</button>
        <button className="btnNav" onClick={ saida }>Despesas</button>
      </section>

    </nav>
  )
}

export default Nav