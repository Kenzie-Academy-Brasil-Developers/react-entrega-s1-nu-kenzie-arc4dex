import './style.css'
import NuKenzie from '../../img/NuKenzie.svg'

function Header({iniciar, setIniciar}){

  function handleIncio(){
    setIniciar(false)
  }

  return(
    <>
      <div className="containerHeader">
        <figure className="containerLogo">
          <img className='logoNuKenzie' src={NuKenzie} alt=""/>
        </figure>
        <button className="btnInicio" onClick={ handleIncio }>Inicio</button>
      </div>
    </>
  )
}

export default Header