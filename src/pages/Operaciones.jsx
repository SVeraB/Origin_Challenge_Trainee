import { Link } from "react-router-dom"

import BotonSalir from "../components/BotonSalir"

const Operaciones = () => {
  return (
    <>
      <div>
        <Link to="/balance" style={{ textDecoration: 'none' }}>
          <div className="row mt-2">
            <button className="btn btn-info">Balance</button>
          </div>
        </Link>

        <Link to="/retiro" style={{ textDecoration: 'none' }}>
          <div className="row mt-2">
            <button className="btn btn-dark">Retiro</button>
          </div>
        </Link>

        <BotonSalir/>
      </div>
    </>
  )
}

export default Operaciones