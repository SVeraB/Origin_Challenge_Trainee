import { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import TarjetaContext from "../context/TarjetaContext"
import BotonAceptar from "../components/BotonAceptar";
import BotonLimpiar from "../components/BotonLimpiar";
import BotonSalir from "../components/BotonSalir";


const IngresarPin = () => {

    useEffect(() => {
        document.title = 'Ingresar PIN'
    }, [])

    const { tarjetaUsuario, updateTarjeta, contador, setContador } = useContext(TarjetaContext)

    const [PIN, setPIN] = useState('')

    const navigate = useNavigate();

    const editarValor = (numero) => {
        if (PIN.length < 4) {
            setPIN(PIN + numero)
        }
    }

    const comprobarPIN = () => {

        if (tarjetaUsuario.PIN !== PIN) {
            console.log("El PIN es invalido")
            setContador(contador + 1)
            console.log(contador);
            if (contador === 4) {
                setContador(0)
                //actualizar db
                navigate('/errorTarjetaBloqueada')
            } else {
                navigate('/errorPIN')
            }
        } else {
            navigate('/operaciones');
        }
    }

    return (
        <>
            <Formulario value={PIN} placeholder={"Ingresar PIN"} />
            <TecladoNumerico editarValor={editarValor} />
            <BotonAceptar handleRecibido={comprobarPIN} />
            <BotonLimpiar handleRecibido={setPIN} />
            <BotonSalir/>
        </>
    )
}

export default IngresarPin