import { createContext, useEffect, useState } from "react";
import { actualizarTarjeta, createOperacion, getOperaciones, getTarjetas, getUnaTarjeta } from "../../utils/handleHttp";

const TarjetaContext = createContext();

const TarjetaProvider = ({ children }) => {
  const url_tarjetas = import.meta.env.VITE_URL_TARJETAS;
  const url_operaciones = import.meta.env.VITE_URL_OPERACIONES;
  //const idIngresado = '5555-5555-5555-5555';

  const [tarjetas, setTarjetas] = useState(null);
  const [operaciones, setOperaciones] = useState(null)
  const [operacionRealizada, setOperacionNueva] = useState(null)
  const [tarjetaUsuario, setTarjetaUsuario] = useState(null);

  const [idIngresado, setIdIngresado] = useState(null)

  const getAllTarjetas = async () => {
    try {
      //console.log("Todas las tarjetas");
      const obtenerTarjetas = await getTarjetas(url_tarjetas);
      setTarjetas(obtenerTarjetas);
      //console.log(obtenerTarjetas);
    } catch (error) {
      console.error('[getAllTarjetas]:', error);
    }
  };

  const getAllOperaciones = async () => {
    try {
        const obtenerOperaciones = await getOperaciones(url_operaciones)
        setOperaciones(obtenerOperaciones)
        console.log(obtenerOperaciones);
    } catch (error) {
        console.error('[getAllOperaciones]:', error);
    }
  }

  const getOneTarjeta = async () => {
    try {
      //console.log("Una tarjeta");
      const obtenerTarjeta = await getUnaTarjeta(url_tarjetas, idIngresado);
      setTarjetaUsuario(obtenerTarjeta);
    } catch (error) {
      console.error('[getUnaTarjeta]:', error);
    }
  };

    useEffect(() => {
        const fetchData = async () => {
          await getAllTarjetas();
          getAllOperaciones()
          // getOneTarjeta se llamará después de getAllTarjetas
          //await getOneTarjeta();
        };
    
        fetchData();
      }, [url_tarjetas]);

      const updateTarjeta = async (tarjetaAEditar) => {
        const id = tarjetaAEditar.id
        const tarjetaEditada = await actualizarTarjeta(url_tarjetas, id, tarjetaAEditar)
        const nuevoEstado = tarjetas.map(tarjeta => (tarjeta.id === id) ? tarjetaAEditar : tarjeta)
        setTarjetas(nuevoEstado)
        setTarjetaUsuario(tarjetaAEditar)
        console.log('Nuevo db',nuevoEstado);
      }

    
      const addOperacion = async (nuevaOperacion) => {

        try {
            // Petición
            const productoCreado = await createOperacion(url_operaciones, nuevaOperacion)
            // Actualización del estado
            setOperaciones([...operaciones, productoCreado])
            //console.log('Operacion realizada', productoCreado);
            setOperacionNueva(productoCreado)
        } catch (error) {
            console.error('[addOperacion]: Algo ocurrió', error)
        }
    }
    
    
      const data = {
        tarjetas,
        tarjetaUsuario,
        operacionRealizada,
        setIdIngresado,
        setTarjetaUsuario,
        addOperacion,
        updateTarjeta,
        getOneTarjeta
      };
    return <TarjetaContext.Provider value={data}>{children}</TarjetaContext.Provider>
}

export { TarjetaProvider }
export default TarjetaContext