import "./styles/main.css";
import logoImg from './assets/favico/logo.svg'
import buttonLogo from './assets/favico/buttonLogo.svg'

function App() {

  return (
    <div className="flex flex-col items-center text-white">
    <div className="max-w-[1344px] mx-auto  my-8 ">
      <img src={logoImg} />
    </div>
    <h1 className="text-3xl font-bold  font-poppins rounded-lg mb-8 ">
      Não sabe o que assistir?
    </h1>
      
    <button className='py-3 px-4 bg-white text-black rounded flex items-center font-bold font-poppins gap-3 mb-8 '>
      <img src={buttonLogo}/>
      Encontrar filme
    </button> 
    <span className="font-poppins text-center max-w-md">
      Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
    </span>
    
    </div>
  )
}

export default App
