import { Link } from "react-router-dom"

const Balance = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Número de Tarjeta</th>
            <th scope="col">Fecha de Vencimiento</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <Link to="/operaciones">
        <button>Atras</button>
      </Link>
      <button>Salir</button>
    </>
  )
}

export default Balance