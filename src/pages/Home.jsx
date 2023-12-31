import { useContext, useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import {getUnaTarjeta} from "../../utils/handleHttp.js";
import { useNavigate } from 'react-router-dom';
import TarjetaContext from "../context/TarjetaContext.jsx";


const Home = () => {

    const [numeroTarjeta, setNumeroTarjeta] = useState('')
    const largoMaximoNumTarjeta = 16
    const navigate = useNavigate();

    const url_tarjetas = import.meta.env.VITE_URL_TARJETAS;
    
    const {setIdIngresado, setTarjetaUsuario, getOneTarjeta, tarjetaUsuario} = useContext(TarjetaContext)

    const editarValor = (numero) => {

        const largoActual = numeroTarjeta.split('-').join('').length

        if(largoActual < largoMaximoNumTarjeta){

            if(largoActual%4 === 0 && largoActual !== 0){
                numero = '-' + numero
            }
            setNumeroTarjeta(numeroTarjeta + numero)
        }

    }

    const vaciarValor = () => {
        setNumeroTarjeta('')
    }

    const checkIfCardIsValid = async () => {
        try {
            console.log(numeroTarjeta);
            const response = await getUnaTarjeta(url_tarjetas, numeroTarjeta)
            setTarjetaUsuario(response)

            //setIdIngresado(numeroTarjeta)
            //getOneTarjeta()
            //const response = tarjetaUsuario

            console.log(response);

            if (response === undefined) {
                navigate('/errorNumeroMalIngresado');

            } if(response.bloqueado) {
                console.log("La tarjeta está bloqueada")
                navigate('/errorTarjetaBloqueada')
            }
            navigate('/ingresarPIN')
        } catch (error) {
            console.error('Error al consultar el endpoint:', error);
        }
    };

    return (
        <>
            <Formulario value={numeroTarjeta} />
            <TecladoNumerico editarValor={editarValor} />
            <button onClick={checkIfCardIsValid}>Aceptar</button>
            <button onClick={vaciarValor}>Limpiar</button>
        </>
    )
}

export default Home