import { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import TablaFila from '../components/TablaFila'
import TarjetaContext from '../context/TarjetaContext'

const BalanceUno = () => {

    const {tarjetaUsuario} = useContext(TarjetaContext)
  
    useEffect(() => {
      document.title = 'Balance'
    }, [])

    if (!tarjetaUsuario) {
        // Datos aún no disponibles, puedes mostrar un mensaje de carga o hacer algo más
        return <p>Cargando...</p>;
    }
  
    return (
      <>
        <table>
          <thead>
            <tr>
              <th scope="col">Número de Tarjeta</th>
              <th scope="col">Fecha de Vencimiento</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>

            <TablaFila producto={tarjetaUsuario}/>
          </tbody>
        </table>
        <Link to="/operaciones">
          <button>Atras</button>
        </Link>
        <button>Salir</button>
      </>
    )
  }
  
export default BalanceUno