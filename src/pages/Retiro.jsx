import { useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"

const Retiro = () => {
  const [value, setValue] = useState('')

  const editarValor = (numero) => {
      setValue(value + numero)
  }

  const vaciarValor = () => {
    setValue('')
  }
  return (
    <>
        <Formulario value={value}/>
        <TecladoNumerico editarValor={editarValor}/>
        <Botonera vaciarValor={vaciarValor}/>
    </>
  )
}

export default Retiro