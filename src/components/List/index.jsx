import Card from "../Card";

import './style.css'

function List({ listTransactions, setListTransactions, mostrarEntrada, mostrarSaida }) {

  const entradas = listTransactions.filter((item) => {
    return item.type === 'entrada'
  })

  const saida = listTransactions.filter((item) => {
    return item.type === 'saída'
  })


  function itemDeleted(index, transaction){
    
    console.log(index)
    /* const listaNova = listTransactions.filter((item) => {
      return item !== transaction
    }) */
    const listaNova = [...listTransactions]
    listaNova.splice(index,1)

    setListTransactions(listaNova)
  }

  return (
    <>
      <ul> 
        {
          mostrarEntrada && mostrarSaida ? (listTransactions.map((transactions, index) => <Card transaction={transactions} key={index} index = {index} itemDeleted = {itemDeleted}/>)) : 
          mostrarSaida === false ? (entradas.map((transactions, index) => <Card transaction={transactions} key={index} index = {index} listTransactions={listTransactions} itemDeleted = {itemDeleted}/>)) : 
          (saida.map((transactions, index) => <Card transaction={transactions} key={index} index = {index} listTransactions={listTransactions} itemDeleted = {itemDeleted}/>))
        }
      </ul>
    </>
  )
}

export default List