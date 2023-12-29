import BotonNumerico from './BotonNumerico'

const TecladoNumerico = ({editarValor}) => {
  return (
    <>
        <div>
            <BotonNumerico numero="7" editarValor={editarValor}/>
            <BotonNumerico numero="8" editarValor={editarValor}/>
            <BotonNumerico numero="9" editarValor={editarValor}/>
            <BotonNumerico numero="4" editarValor={editarValor}/>
            <BotonNumerico numero="5" editarValor={editarValor}/>
            <BotonNumerico numero="6" editarValor={editarValor}/>
            <BotonNumerico numero="1" editarValor={editarValor}/>
            <BotonNumerico numero="2" editarValor={editarValor}/>
            <BotonNumerico numero="3" editarValor={editarValor}/>
            <BotonNumerico numero="0" editarValor={editarValor}/>
        </div>
    </>
  )
}

export default TecladoNumerico