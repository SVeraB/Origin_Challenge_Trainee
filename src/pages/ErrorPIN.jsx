import { Link } from "react-router-dom"

const ErrorPIN = () => {
    return (
        <>
            <h1>PIN mal ingresado</h1>

            <Link to={'/ingresarPIN'}>
                <button>Atras</button>
            </Link>
        </>
    )
}

export default ErrorPIN