import BotonAtras from "../components/BotonAtras"

const ErrorPIN = () => {
    return (
        <div className="container">
            <h1>PIN mal ingresado</h1>

            <BotonAtras link={'/ingresarPIN'} />
        </div>
    )
}

export default ErrorPIN