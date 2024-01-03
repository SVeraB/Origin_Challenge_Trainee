import { createContext, useEffect, useState } from "react";
import { actualizarTarjeta, createOperacion, getOperaciones, getTarjetas, getUnaTarjeta } from "../../utils/handleHttp";

const TarjetaContext = createContext();

const TarjetaProvider = ({ children }) => {
  const url_tarjetas = import.meta.env.VITE_URL_TARJETAS;
  const url_operaciones = import.meta.env.VITE_URL_OPERACIONES;

  useEffect(() => {
    const fetchData = async () => {
      await getAllTarjetas();
      getAllOperaciones()
      // getOneTarjeta se llamará después de getAllTarjetas
      //await getOneTarjeta();
    };

    fetchData();
  }, [url_tarjetas]);

  const [contador, setContador] = useState(1)

  const [tarjetas, setTarjetas] = useState(null);
  const [operaciones, setOperaciones] = useState(null)
  const [operacionRealizada, setOperacionNueva] = useState(null)
  const [tarjetaUsuario, setTarjetaUsuario] = useState(null);

  const [idIngresado, setIdIngresado] = useState(null)

  const getAllTarjetas = async () => {
    try {
      const obtenerTarjetas = await getTarjetas(url_tarjetas);
      setTarjetas(obtenerTarjetas);
    } catch (error) {
      console.error('[getAllTarjetas]:', error);
    }
  };

  const getAllOperaciones = async () => {
    try {
      const obtenerOperaciones = await getOperaciones(url_operaciones)
      setOperaciones(obtenerOperaciones)
    } catch (error) {
      console.error('[getAllOperaciones]:', error);
    }
  }

  const getOneTarjeta = async () => {
    try {
      const obtenerTarjeta = await getUnaTarjeta(url_tarjetas, idIngresado);
      setTarjetaUsuario(obtenerTarjeta);
    } catch (error) {
      console.error('[getUnaTarjeta]:', error);
    }
  };



  const updateTarjeta = async (tarjetaAEditar) => {
    const id = tarjetaAEditar.id
    const tarjetaEditada = await actualizarTarjeta(url_tarjetas, id, tarjetaAEditar)
    const nuevoEstado = tarjetas.map(tarjeta => (tarjeta.id === id) ? tarjetaEditada : tarjeta)
    setTarjetas(nuevoEstado)
    setTarjetaUsuario(tarjetaAEditar)
  }


  const addOperacion = async (nuevaOperacion) => {

    try {
      const productoCreado = await createOperacion(url_operaciones, nuevaOperacion)
      setOperaciones([...operaciones, productoCreado])
      setOperacionNueva(productoCreado)
    } catch (error) {
      console.error('[addOperacion]: Algo ocurrió', error)
    }
  }


  const data = {
    tarjetas,
    tarjetaUsuario,
    operacionRealizada,
    contador,
    setContador,
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