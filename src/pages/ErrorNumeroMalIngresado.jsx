import React from 'react'
import { Link } from 'react-router-dom'

const ErrorNumeroMalIngresado = () => {
  return (
    <>
        <h1>Numero de Tarjeta mal ingresado</h1>

        <Link to={'/'}>
            <button>Atras</button>
        </Link>
    </>
  )
}

export default ErrorNumeroMalIngresado