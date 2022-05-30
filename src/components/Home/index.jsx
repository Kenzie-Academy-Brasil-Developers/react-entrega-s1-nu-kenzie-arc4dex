import './style.css'
import ImgHome from '../../img/ImgHome.svg'
import NuKenzieHome from '../../img/NuKenzieHome.svg'

function HomePage({iniciar, setIniciar}){
  
  function handleInciar(){
    setIniciar(true)
  }

  return(
    <main className='secaoPrincipalHome'>
      <section className='secao1'>
          <img className='logoHome' src={NuKenzieHome} alt="Logo" />
        <div className='containerPrincipal'>
          <h3 className='textoPrincipal'>Centralize o controle das suas finanças</h3>
          <p className='subTexto'>de forma rápida e segura</p>
          <button className='btnInciar' onClick={ handleInciar }>Iniciar</button>
        </div>
      </section>
      <section>
        <img src={ImgHome} alt='imagem da home page com várias listas sobrepostas'/>
      </section>
    </main>
  )
}

export default HomePage