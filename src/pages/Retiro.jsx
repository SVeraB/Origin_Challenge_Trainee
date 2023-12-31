import { useContext, useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"
import TarjetaContext from "../context/TarjetaContext"
import { useNavigate } from 'react-router-dom';

const Retiro = () => {

  const { tarjetaUsuario, addOperacion, updateTarjeta } = useContext(TarjetaContext)
  const navigate = useNavigate();

  const [monto, setmonto] = useState('')

  const editarValor = (numero) => {
    setmonto(monto + numero)
  }

  const vaciarValor = () => {
    setmonto('')
  }

  const comprobarSiElMontoEsCorrecto = () => {
    try {
      if (tarjetaUsuario.balance > parseInt(monto)) {

        
        const tarjetaActualizada = {
          id: tarjetaUsuario.id,
          PIN: tarjetaUsuario.PIN,
          fechaVencimiento: tarjetaUsuario.fechaVencimiento,
          bloqueado: tarjetaUsuario.bloqueado,
          balance: (tarjetaUsuario.balance - monto)
        }

        updateTarjeta(tarjetaActualizada)
        
        const nuevaOperacion = {
          id: 6,
          numeroTarjeta: tarjetaUsuario.id,
          fechaYHora: "30/12/2023 23:40",
          monto: monto

        }
        addOperacion(nuevaOperacion)
        navigate('/reporteDeOperaciones');

      } else {
        navigate('/errorMonto')
        console.log("El monto es invalido")
      }
    } catch (error) {
      console.error('Error al consultar el endpoint:', error);
    }
  }
  return (
    <>
      <Formulario value={monto} />
      <TecladoNumerico editarValor={editarValor} />
      <button onClick={comprobarSiElMontoEsCorrecto}>Aceptar</button>
      <button onClick={vaciarValor}>Limpiar</button>
      <button>Salir</button>
    </>
  )
}

export default Retiro