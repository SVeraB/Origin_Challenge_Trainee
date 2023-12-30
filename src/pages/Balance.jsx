import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TablaFila from "../components/TablaFila"
import TarjetaContext from "../context/TarjetaContext"


const Balance = () => {
  
  

  const {tarjetas} = useContext(TarjetaContext)

  useEffect(() => {
    document.title = 'Balance'
    
  }, [])


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
        {
              
              tarjetas && tarjetas.map( (producto, idx) => (
                <TablaFila
                  key={idx}
                  producto={producto} />
              ))
          }
        </tbody>
      </table>
      <Link to="/operaciones">
        <button>Atras</button>
      </Link>
      <button>Salir</button>
    </>
  )
}

export default Balance