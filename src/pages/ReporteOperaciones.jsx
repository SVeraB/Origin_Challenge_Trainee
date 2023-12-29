import { Link } from "react-router-dom"

const ReporteOperaciones = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Número de Tarjeta</th>
            <th scope="col">Fecha de Vencimiento</th>
            <th scope="col">Monto Retirado</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
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