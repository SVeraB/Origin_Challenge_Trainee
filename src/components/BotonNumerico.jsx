const BotonNumerico = ({numero, editarValor}) => {

    const handleClick = () => {
        editarValor(numero)
    }

    return (
        <>
            <button onClick={handleClick}>{numero}</button>
        </>
    )
}

export default BotonNumerico