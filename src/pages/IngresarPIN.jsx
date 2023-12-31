import { useContext, useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import TarjetaContext from "../context/TarjetaContext"
import { useNavigate } from 'react-router-dom';

const IngresarPin = () => {

    const { tarjetaUsuario, updateTarjeta } = useContext(TarjetaContext)

    const [PIN, setPIN] = useState('')
    const [cantidadDeErrores, setCantidad] = useState(0)
    const navigate = useNavigate();

    const editarValor = (numero) => {
        if (PIN.length < 4) {
            setPIN(PIN + numero)
        }
    }

    const vaciarValor = () => {
        setPIN('')
    }

    const checkIfPINIsValid = async () => {
        try {

            if (tarjetaUsuario.PIN !== PIN) {
                console.log("El PIN es invalido")

                setCantidad(cantidadDeErrores + 1)
                if (cantidadDeErrores === 4) {
                    const tarjetaActualizada = {
                        id: tarjetaUsuario.id,
                        PIN: tarjetaUsuario.PIN,
                        fechaVencimiento: tarjetaUsuario.fechaVencimiento,
                        bloqueado: true,
                        balance: tarjetaUsuario.balance
                    }
                    setCantidad(0)
                    updateTarjeta(tarjetaActualizada)
                    navigate('/errorTarjetaBloqueada')
                }
                navigate('/errorPIN')
            }else{
                navigate('/operaciones');
            }

            

        } catch (error) {
            console.error('Error al consultar el endpoint:', error);
        }
    }

    return (
        <>
            <Formulario value={PIN} />
            <TecladoNumerico editarValor={editarValor} />
            <button onClick={checkIfPINIsValid}>Aceptar</button>
            <button onClick={vaciarValor}>Limpiar</button>
            <button>Salir</button>
        </>
    )
}

export default IngresarPin