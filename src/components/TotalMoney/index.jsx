import './style.css'

function TotalMoney({ state, listTransactions }){

  return (
    <section className="containerValorTotal">
      <div className='valorTotal'>
        <h3 className='textoValorTotal'>Valor Total:</h3>
        <p className='textoSaldo'>O valor se refere ao saldo</p>
      </div>
      <p className='saldo'>$ { 
        listTransactions.reduce((a, b) => {
          if(b.type === 'entrada'){
            return a + b.value
          } else {
            return a - b.value
          }
        }, 0)
        }
      </p>
    </section>
  )
}

export default TotalMoney