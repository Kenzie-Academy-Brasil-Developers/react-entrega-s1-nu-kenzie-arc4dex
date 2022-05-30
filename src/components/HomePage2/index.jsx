import Header from '../Header';
import Form from '../Form';
import List from '../List';
import TotalMoney from '../TotalMoney';
import Nav from '../Filtros';
import ListEmpty from '../ListEmpty';

function HomePage2({ listTransactions, setListTransactions, iniciar, setIniciar, mostrarEntrada, setMostrarEntrada, mostrarSaida, setMostrarSaida }){

  return (
    <>
       <Header iniciar={iniciar} setIniciar = { setIniciar }/>
        <section className='secaoPrincipal'>
          <div>
            <Form listTransactions= {listTransactions} setListTransactions = {setListTransactions}/>
            <TotalMoney listTransactions = {listTransactions}/>
          </div>
          <section className='resumolancamentos'>
            {listTransactions < 1 ? <ListEmpty/> : <> <Nav listTransactions = {listTransactions} setListTransactions = {setListTransactions} mostrarEntrada = { mostrarEntrada } setMostrarEntrada = { setMostrarEntrada } mostrarSaida = { mostrarSaida } setMostrarSaida = { setMostrarSaida } /> 
            <List listTransactions = {listTransactions} setListTransactions = {setListTransactions}  mostrarEntrada = { mostrarEntrada } setMostrarEntrada = { setMostrarEntrada } mostrarSaida = { mostrarSaida } setMostrarSaida = { setMostrarSaida }/> </>}
            
          </section>
        </section>
    </>
  )
}

export default HomePage2