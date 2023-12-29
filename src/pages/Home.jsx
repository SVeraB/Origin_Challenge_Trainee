import { useState } from "react"
import Formulario from "../components/Formulario"
import TecladoNumerico from "../components/TecladoNumerico"
import Botonera from "../components/Botonera"

const Home = () => {
    const [value, setValue] = useState('')

    const editarValor = (numero) => {
        const valorActual = value.split('-').join("")
        {valorActual.length < 16 ? valorActual + numero : valorActual}
        setValue(valorActual)
        console.log(valorActual);
        const nuevoValor =  ""
        for (let i = 0; i < valorActual.length; i++) {
            const element = valorActual[i];
            console.log(i);
            nuevoValor + element
            if (i%4 === 0) {
                nuevoValor + "-"
            }
            
        }
        /* setValue(nuevoValor) */
    }
    const vaciarValor = () => {
        setValue('')
    }

    return (
        <>
            <Formulario value={value}/>
            <TecladoNumerico editarValor={editarValor}/>
            <Botonera vaciarValor={vaciarValor}/>
        </>
    )
}

export default Home