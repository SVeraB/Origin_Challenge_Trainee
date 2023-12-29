import { Link } from "react-router-dom"

const Operaciones = () => {
  return (
  <>
    <div>
      <Link to="/balance">
        <button>Balance</button>
      </Link>
      <Link to="/retiro">
        <button>Retiro</button>
      </Link>
      <button>Salir</button>
    </div>
  </>
  )
}

export default Operaciones