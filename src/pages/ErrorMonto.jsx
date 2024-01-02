import BotonAtras from '../components/BotonAtras'

const ErrorMonto = () => {
  return (
    <div className='container'>
      <h1>Monto mal ingresado</h1>

      <BotonAtras link={'/retiro'} />
    </div>
  )
}

export default ErrorMonto