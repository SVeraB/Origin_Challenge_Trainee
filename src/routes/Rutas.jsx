import { useRoutes } from "react-router"
import Home from "../pages/Home"
import IngresarPin from "../pages/IngresarPIN"
import Operaciones from "../pages/Operaciones"
import Balance from "../pages/Balance"
import Retiro from "../pages/Retiro"
import ReporteOperaciones from "../pages/ReporteOperaciones"
import ErrorTarjetaBloqueada from "../pages/ErrorTarjetaBloqueada"
import ErrorNumeroMalIngresado from "../pages/ErrorNumeroMalIngresado"
import ErrorPIN from "../pages/ErrorPIN"
import ErrorMonto from "../pages/ErrorMonto"

const Rutas = () => {
    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/ingresarPIN',
                element: <IngresarPin/>
            },
            {
                path: '/operaciones',
                element: <Operaciones/>
            },
            {
                path: '/balance',
                element: <Balance/>
            },
            {
                path: '/retiro',
                element: <Retiro/>
            },
            {
                path: '/reporteDeOperaciones',
                element: <ReporteOperaciones/>
            },
            {
                path: '/errorTarjetaBloqueada',
                element: <ErrorTarjetaBloqueada/>
            },
            {
                path: '/errorNumeroMalIngresado',
                element: <ErrorNumeroMalIngresado/>
            },
            {
                path: '/errorPIN',
                element: <ErrorPIN/>
            },
            {
                path: '/errorMonto',
                element: <ErrorMonto/>
            }
        ]
    )
    return rutas
}

export default Rutas
