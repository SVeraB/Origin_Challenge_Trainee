import { redirect } from "react-router-dom"

const Botonera = ({vaciarValor}) => {

  const handleReset = () => {
    vaciarValor()
  }

  const handleRedirect = () => {
    if(true) {
      return redirect('/ingresarPIN')
    }else{
      
    }
  }
  return (
    <>
        <div>
          <button onClick={handleRedirect}>Aceptar</button>
          <button onClick={handleReset}>Limpiar</button>
          <button>Salir</button>
        </div>
    </>
  )
}

export default Botonera