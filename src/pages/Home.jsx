import { useContext, useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"
import {getUnaTarjeta} from "../../utils/handleHttp.js";
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [numeroTarjeta, setNumeroTarjeta] = useState('')
    const largoMaximoNumTarjeta = 16
    const navigate = useNavigate();

    const url_tarjetas = import.meta.env.VITE_URL_TARJETAS;


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
            const response = await getUnaTarjeta(url_tarjetas, numeroTarjeta)

            if (response != null && !response.bloqueado) {
                navigate('/ingresarPIN');

            } else {
                console.log("La tarjeta es invalida")
            }
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