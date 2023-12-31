import { Link } from 'react-router-dom'

const ErrorMonto = () => {
  return (
    <>
    <h1>Monto mal ingresado</h1>

    <Link to={'/retiro'}>
        <button>Atras</button>
    </Link>
</>
  )
}

export default ErrorMonto