import './style.css'
import Trash from '../../img/trash.svg'

function Card({ transaction, index, itemDeleted }){

  return (
       <li className='li'>
         {transaction.type === 'entrada' ? <div className="faixaVerde">.</div> : <div className="faixaCinza">.</div>}
         <div className='containerCard'>
          <div className='tipoDinheiro'>
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
          </div>
        <div className='containerValor'>
            <p>R${transaction.type === 'entrada' ? transaction.value.toFixed(2) : ` -${transaction.value.toFixed(2)}`}</p> 
            <img src={Trash} alt="lixeira" className='imgLixeira' onClick={ () => itemDeleted(index, transaction) }></img> 
        </div>
         </div>
        </li>
  )
}

export default Card