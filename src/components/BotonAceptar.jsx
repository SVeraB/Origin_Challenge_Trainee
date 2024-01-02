const BotonAceptar = ({handleRecibido}) => {

    const handleClick = () => handleRecibido()

    return (
        <div className="row mt-2">
            <button className="btn btn-success" onClick={handleClick}>Aceptar</button>
        </div>
    )
}

export default BotonAceptar