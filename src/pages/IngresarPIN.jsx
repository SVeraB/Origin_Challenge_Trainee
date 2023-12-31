import { useContext, useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"
import TarjetaContext from "../context/TarjetaContext"
import { useNavigate } from 'react-router-dom';

const IngresarPin = () => {

    const {tarjetaUsuario} = useContext(TarjetaContext)

    const [PIN, setPIN] = useState('')
    const navigate = useNavigate();

    const editarValor = (numero) => {
        if(PIN.length < 4){
            setPIN(PIN + numero)
        }
    }

    const vaciarValor = () => {
        setPIN('')
    }

    const checkIfPINIsValid = async () => {
        try {

            if (tarjetaUsuario.PIN === PIN) {
                navigate('/operaciones');

            } else {
                console.log("El PIN es invalido")
            }
        } catch (error) {
            console.error('Error al consultar el endpoint:', error);
        }
    }

    return (
        <>
            <Formulario value={PIN}/>
            <TecladoNumerico editarValor={editarValor}/>
            <button onClick={checkIfPINIsValid}>Aceptar</button>
            <button onClick={vaciarValor}>Limpiar</button>
            <button>Salir</button>
        </>
    )
}

export default IngresarPin