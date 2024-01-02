const BotonNumerico = ({numero, editarValor}) => {

    const handleClick = () => {
        editarValor(numero)
    }

    return (
        <>
            <button className="col-1 btn btn-outline-secondary" onClick={handleClick}>{numero}</button>
        </>
    )
}

export default BotonNumerico