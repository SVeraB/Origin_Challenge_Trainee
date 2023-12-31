import { useContext } from "react"
import { Link } from "react-router-dom"
import TarjetaContext from "../context/TarjetaContext"

const ReporteOperaciones = () => {

  const { tarjetaUsuario, operacionRealizada } = useContext(TarjetaContext)

  if (!operacionRealizada) {
    // Datos aún no disponibles, puedes mostrar un mensaje de carga o hacer algo más
    return <p>Cargando...</p>;
  }
  //console.log('operacion realizada rep op',operacionRealizada);

/* const tarjetaUsuario = {
  id: "5555-5555-5555-5555",
  PIN: "5555",
  fechaVencimiento: "4/12/2027",
  bloqueado: false,
  balance: 50000
} */
/* const operacion = {
  id: 6,
  numeroTarjeta: "5555-5555-5555-5555",
  fechaYHora: "30/12/2023 23:40",
  monto: 8000

} */

  return (
    <>
      <table>
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
      <Link to="/retiro">
        <button>Atras</button>
      </Link>
      <button>Salir</button>
    </>
  )
}

export default ReporteOperaciones