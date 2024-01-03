import { useContext, useEffect, useState } from "react"
import TarjetaContext from "../context/TarjetaContext"
import { useNavigate } from "react-router";

import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import BotonAceptar from "../components/BotonAceptar";
import BotonLimpiar from "../components/BotonLimpiar";
import BotonSalir from "../components/BotonSalir";

const Retiro = () => {

  useEffect(() => {
    document.title = 'Retiro'
  }, [])

  const { tarjetaUsuario, addOperacion, updateTarjeta } = useContext(TarjetaContext)
  const navigate = useNavigate();

  const [monto, setMonto] = useState('')

  const editarValor = (numero) => {
    setMonto(monto + numero)
  }

  const comprobarMonto = () => {
    try {
      if (tarjetaUsuario.balance >= parseInt(monto)) {


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
      <Formulario value={monto} placeholder={"Ingrese monto a retirar"} />
      <TecladoNumerico editarValor={editarValor} />
      <BotonAceptar handleRecibido={comprobarMonto} />
      <BotonLimpiar handleRecibido={setMonto} />
      <BotonSalir/>
    </>
  )
}

export default Retiro