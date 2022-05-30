import { useState } from 'react'
import './style.css'

function Form({ listTransactions, setListTransactions, copyList, setCopyList }){
  
  const [ descricao, setDescricao ] = useState('')

  const [ valorinicial, setValorInicial ] = useState(0)

  const [ typeInicial, setTypeInicial ] = useState('entrada')

  function handleSubmit(){
    setListTransactions([...listTransactions, {description: descricao, value: parseInt(valorinicial), type: typeInicial}, ])
  }

  return(
    <form className='formulario' onSubmit={(event) => {
      event.preventDefault()
      handleSubmit()
      }} required>
        
      <label>Descrição</label>
        <input className='inputDescricao' type='text' name='description' placeholder='Digite aqui sua descrição' onChange={(event) => setDescricao(event.target.value)}/>
      <label className='labelEx'>Ex: Compra de roupas</label>
      <div className='containerLabel'>
        <label>Valor</label>
        <label>Tipo de valor</label>

      </div>
     
      <section className='containerPreco'>
        <input className='inputValor' type='number' name='value' placeholder='R$' onChange={(event) => setValorInicial(event.target.value)}/>
        
      <select className='select' onChange={(event) => {
        setTypeInicial(event.target.value)
        }}>
        <option className='option' value='entrada'>entrada</option>
        <option className='option' value='saida'>saída</option>
      </select>
      </section>
      <button className='btnSubmit' type="submit">Inserir o valor</button>
    </form>
  )
}

export default Form