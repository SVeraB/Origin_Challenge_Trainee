import { useContext, useEffect } from 'react'

import TablaFila from '../components/TablaFila'
import TarjetaContext from '../context/TarjetaContext'
import BotonAtras from '../components/BotonAtras'
import BotonSalir from '../components/BotonSalir'

const BalanceUno = () => {

  const { tarjetaUsuario } = useContext(TarjetaContext)

  useEffect(() => {
    document.title = 'Balance'
  }, [])

  if (!tarjetaUsuario) {

    return <p>Cargando...</p>;
  }

  return (
    <>
      <table className='table table-info table-striped'>
        <thead>
          <tr>
            <th scope="col">Número de Tarjeta</th>
            <th scope="col">Fecha de Vencimiento</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>

          <TablaFila producto={tarjetaUsuario} />
        </tbody>
      </table>
      <BotonAtras link={'/operaciones'} />
      <BotonSalir/>
    </>
  )
}

export default BalanceUno