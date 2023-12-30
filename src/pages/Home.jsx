import { useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"

const Home = () => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('')
    const largoMaximoNumTarjeta = 16

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

    return (
        <>
            <Formulario value={numeroTarjeta} />
            <TecladoNumerico editarValor={editarValor} />
            <button>Aceptar</button>
            <button onClick={vaciarValor}>Limpiar</button>
        </>
    )
}

export default Home