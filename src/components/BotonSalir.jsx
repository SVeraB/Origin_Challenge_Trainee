import { Link } from "react-router-dom"

const BotonSalir = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="row mt-2">
          <button className="btn btn-danger">Salir</button>
        </div>
    </Link>
  )
}

export default BotonSalir