import { createContext, useEffect, useState } from "react";
import { getTarjetas, getUnaTarjeta } from "../../utils/handleHttp";

const TarjetaContext = createContext()


const TarjetaProvider = ({ children }) => {
    const url_tarjetas = import.meta.env.VITE_URL_TARJETAS
    //const url_operaciones = import.meta.env.VITE_URL_OPERACIONES
    //const idIngresado = '5555-5555-5555-5555'

    const [tarjetas, setTarjetas] = useState(null)

    const [tarjetaUsuario, setTarjetaUsuario] = useState(null)

    const getAllTarjetas = async () => {

        try {
            const obtenerTarjetas = await getTarjetas(url_tarjetas)
            setTarjetas(obtenerTarjetas)
            console.log(obtenerTarjetas);

        } catch (error) {
            console.error('[getAllTarjetas]:', error)
        }

    }

    const getOneTarjeta = async () => {
        try {
            const obtenerTarjeta = await getUnaTarjeta(url_tarjetas, idIngresado)
            setTarjetaUsuario(obtenerTarjeta)
        } catch (error) {
            console.error('[getUnaTarjeta]:', error);
        }
    }

    useEffect(() => {
        getAllTarjetas()
    }, [url_tarjetas])
    

    const data = {
        tarjetas,
    }
    return <TarjetaContext.Provider value={data}>{children}</TarjetaContext.Provider>
}

export { TarjetaProvider }
export default TarjetaContext