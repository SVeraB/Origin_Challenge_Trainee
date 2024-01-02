const BotonLimpiar = ({handleRecibido}) => {

    const handleClick = () => handleRecibido('')

    return (
        <div className="row mt-2">
            <button className="btn btn-secondary" onClick={handleClick}>Limpiar</button>
        </div>
    )
}

export default BotonLimpiar