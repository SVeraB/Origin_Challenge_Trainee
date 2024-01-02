import BotonAtras from '../components/BotonAtras'

const ErrorNumeroMalIngresado = () => {
  return (
    <div className="container">
      <h1>Numero de Tarjeta mal ingresado</h1>

      <BotonAtras link={'/'}/>


    </div>
  )
}

export default ErrorNumeroMalIngresado