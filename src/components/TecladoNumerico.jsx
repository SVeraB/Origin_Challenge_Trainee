import BotonNumerico from './BotonNumerico'

const TecladoNumerico = ({ editarValor }) => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <BotonNumerico numero="7" editarValor={editarValor} />
        <BotonNumerico numero="8" editarValor={editarValor} />
        <BotonNumerico numero="9" editarValor={editarValor} />
      </div>
      <div className="row justify-content-center">
        <BotonNumerico numero="4" editarValor={editarValor} />
        <BotonNumerico numero="5" editarValor={editarValor} />
        <BotonNumerico numero="6" editarValor={editarValor} />
      </div>
      <div className='row justify-content-center'>
        <BotonNumerico numero="1" editarValor={editarValor} />
        <BotonNumerico numero="2" editarValor={editarValor} />
        <BotonNumerico numero="3" editarValor={editarValor} />
      </div>
      <div className='row justify-content-center'>
        <BotonNumerico numero="0" editarValor={editarValor} />
      </div>
    </div>
  )
}

export default TecladoNumerico