import './style.css'

function ListEmpty(){

  return(
    <section className="containerListaVazia">
      <h3>Você ainda não possui nenhum lançamento</h3>
      <div className="listaVazia">
        <div className="linhaCinza">.</div>
        <div className="containerBarras">
          <div className="barraCinza1">.</div>
          <div className="barraCinza2">.</div>
        </div>
      </div>
      <div className="listaVazia">
        <div className="linhaCinza">.</div>
        <div className="containerBarras">
          <div className="barraCinza1">.</div>
          <div className="barraCinza2">.</div>
        </div>
      </div>
      <div className="listaVazia">
        <div className="linhaCinza">.</div>
        <div className="containerBarras">
          <div className="barraCinza1">.</div>
          <div className="barraCinza2">.</div>
        </div>
      </div>
    </section>
  )
}

export default ListEmpty