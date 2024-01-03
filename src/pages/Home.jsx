import { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import {getUnaTarjeta} from "../../utils/handleHttp.js";
import TarjetaContext from "../context/TarjetaContext.jsx";
import BotonAceptar from "../components/BotonAceptar.jsx";
import BotonLimpiar from "../components/BotonLimpiar.jsx";


const Home = () => {

    useEffect(() => {
        document.title = 'Home'
      }, [])

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

    const comprobarNumeroDeTarjeta = async () => {
        try {
            const response = await getUnaTarjeta(url_tarjetas, numeroTarjeta)
            setTarjetaUsuario(response)

            if (response === undefined) {
                navigate('/errorNumeroMalIngresado');

            } if(response.bloqueado) {
                console.log("La tarjeta está bloqueada")
                navigate('/errorTarjetaBloqueada')
            }else{
                navigate('/ingresarPIN')
            }
        } catch (error) {
            console.error('Error al consultar el endpoint:', error);
        }
    };

    return (
        <>
            <Formulario value={numeroTarjeta} placeholder={"Ingrese un número de tarjeta de 16 digitos"}/>
            <TecladoNumerico editarValor={editarValor} />
            <BotonAceptar handleRecibido={comprobarNumeroDeTarjeta}/>
            <BotonLimpiar handleRecibido={setNumeroTarjeta}/>
        </>
    )
}

export default Home