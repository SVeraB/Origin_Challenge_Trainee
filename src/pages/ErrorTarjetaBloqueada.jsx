import { Link } from "react-router-dom"

const ErrorTarjetaBloqueada = () => {
  return (
    <>
        <h1>Tarjeta Bloqueada</h1>
        <Link to={'/'}>
            <button>Atras</button>
        </Link>
    </>
  )
}

export default ErrorTarjetaBloqueada