import { Link } from "react-router-dom"

const BotonAtras = ({link}) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <button className="btn btn-warning">Atras</button>
        </Link>
    )
}

export default BotonAtras