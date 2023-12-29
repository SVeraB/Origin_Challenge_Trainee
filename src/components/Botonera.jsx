const Botonera = ({vaciarValor}) => {

  const handleReset = () => {
    vaciarValor()
  }

  return (
    <>
        <div>
          <button>Aceptar</button>
          <button onClick={handleReset}>Limpiar</button>
          <button>Salir</button> {/* Ver de ocultar cuando sea necesario */}
        </div>
    </>
  )
}

export default Botonera