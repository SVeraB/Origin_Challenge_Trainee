import { useRoutes } from "react-router"
import Home from "../pages/Home"
import IngresarPin from "../pages/IngresarPIN"
import Operaciones from "../pages/Operaciones"
import Balance from "../pages/Balance"
import Retiro from "../pages/Retiro"
import ReporteOperaciones from "../pages/ReporteOperaciones"
import ErrorIngreso from "../pages/ErrorIngreso"
import BalanceUno from "../pages/BalanceUno"

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
                path: '/errorIngreso',
                element: <ErrorIngreso/>
            },
            {
                path: '/balanceUno',
                element: <BalanceUno/>
            }
        ]
    )
    return rutas
}

export default Rutas
