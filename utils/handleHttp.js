export const getTarjetas = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error(`Ocurrió un error al obtener las tarjetas: ${respuesta.status} ${respuesta.statusText}`)
        }
        const tarjetas = await respuesta.json()
        console.log(tarjetas)
        return tarjetas
    } catch (error) {
        console.error('[getTarjetas]:', error);
    }
}

export const getUnaTarjeta = async (url, id) => {
    try {
        console.log(url + id);
        const respuesta = await fetch(url + id)
        if (!respuesta.ok) {
            throw new Error(`Ocurrió un error al obtener la tarjeta: ${respuesta.status} ${respuesta.statusText}`)
        }
        const tarjetas = await respuesta.json()
        console.log(tarjetas)
        return tarjetas
    } catch (error) {
        console.error('[getTarjeta]:', error);
    }
}