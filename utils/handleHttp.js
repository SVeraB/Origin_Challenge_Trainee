export const getTarjetas = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error(`Ocurrió un error al obtener las tarjetas: ${respuesta.status} ${respuesta.statusText}`)
        }
        const tarjetas = await respuesta.json()
        //console.log(tarjetas)
        return tarjetas
    } catch (error) {
        console.error('[getTarjetas]:', error);
    }
}

export const getOperaciones = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error(`Ocurrió un error al obtener las operaciones: ${respuesta.status} ${respuesta.statusText}`)
        }
        const operaciones = await respuesta.json()
        //console.log(Operaciones)
        return operaciones
    } catch (error) {
        console.error('[getOperaciones]:', error);
    }
}

export const getUnaTarjeta = async (url, id) => {
    console.log("URL GETCARD " + url + id)
    //const url = "http://localhost/tarjeta/{id}"
    try {
        const respuesta = await fetch(url + id)
        if (!respuesta.ok) {
            throw new Error(`Ocurrió un error al obtener la tarjeta: ${respuesta.status} ${respuesta.statusText}`)
        }
        const tarjeta = await respuesta.json()
        //console.log(tarjeta)
        return tarjeta
    } catch (error) {
        console.error('[getTarjeta]:', error);
    }
}

export const actualizarTarjeta = async(url, id, tarjetaAEditar) => {
    try {
        const options = {
            method: 'PUT',
            headers: {'Content-type': 'aplication/json'},
            body: JSON.stringify(tarjetaAEditar)
        }

        const urlUpdate = url + id
        const respuesta = await fetch(urlUpdate, options)


        if (!respuesta.ok) {
            throw new Error(`Falló la petición asincronica para actualizar un producto ${respuesta.status} - ${respuesta.statusText}`)
        }

        const tarjetaEditada = await respuesta.json()

        console.log(tarjetaEditada);

        return tarjetaEditada
    } catch (error) {
        console.error('[putProducto]:', error);
    }
}

export const createOperacion = async (url, nuevaOperacion) => {

    try {
        
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(nuevaOperacion)
        }

        const respuesta = await fetch(url, options)

        if (!respuesta.ok) {
            throw new Error(`Falló la petición asincronica de creación de productos ${respuesta.status} ${respuesta.statusText}`)
        }

        const operacionCreada = await respuesta.json()
        //console.log('operacion realizada',operacionCreada)

        return operacionCreada

    } catch (error) {
        console.error('[createProducto]: ', error)
    }

}

// BACKEND 2 RUTAS : getTarjeta & getTarjetas
// urlbackend:puerto/tarjeta/ => all
// urlbackend:puerto/tarjeta/id => get una tajretajasjdasf
