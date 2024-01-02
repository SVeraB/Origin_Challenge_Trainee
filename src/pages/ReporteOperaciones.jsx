import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import TarjetaContext from "../context/TarjetaContext"
import BotonSalir from "../components/BotonSalir"
import BotonAtras from "../components/BotonAtras"

const ReporteOperaciones = () => {

  const { tarjetaUsuario, operacionRealizada } = useContext(TarjetaContext)


  useEffect(() => {
    document.title = 'Reporte de operaciones'
  }, [])

  if (!operacionRealizada) {
    // Datos aún no disponibles, puedes mostrar un mensaje de carga o hacer algo más
    return <p>Cargando...</p>;
  }

  return (
    <>
      <table className="table table-info table-striped">
        <thead>
          <tr>
            <th scope="col">Número de Tarjeta</th>
            <th scope="col">Fecha Y Hora</th>
            <th scope="col">Monto Retirado</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{operacionRealizada.numeroTarjeta}</td>
            <td>{operacionRealizada.fechaYHora}</td>
            <td>${operacionRealizada.monto}</td>
            <td>${tarjetaUsuario.balance}</td>

          </tr>
        </tbody>
      </table>
      <BotonAtras link={'/retiro'} />
      <BotonSalir/>
    </>
  )
}

export default ReporteOperaciones