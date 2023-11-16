import axios from 'axios';

    const apiUrl = 'https://clinicaback-hngz.4.us-1.fl0.io';

export async function obtenerTurnos() {
    try{
    const respuesta = await axios.get(`${apiUrl}/turnos/`,{withCredentials:true})
    return respuesta.data
    } catch (error) {
        console.error('Error en obtenerTurnos:', error);
        throw error;    
    }
}

export async function obtenerTurno(id) {
    try{
    const respuesta = await axios.get(`${apiUrl}/turnos/${id}`,{withCredentials:true})
    return respuesta.data
    } catch (error) {
        console.error('Error en obtenerTurno:', error);
        throw error;
    }
}

export async function agregarTurno(datos) {
    try {
        const respuesta = await axios.post(`${apiUrl}/turnos/`, datos, {withCredentials:true})
        return respuesta.data
    } catch (error) {
        console.error('Error en agregarTurno:', error);
        throw error;
    }
}

export async function actualizarTurno(id, datos) {
    try {
        const respuesta = await axios.put(`${apiUrl}/turnos/${id}`, datos, {withCredentials:true});
        return respuesta.data
    } catch (error) {
        console.error('Error en actualizarTurno:', error);
        throw error;
    }
}

export async function actualizarEstadoTurno(id, estado) {
    try {
        const respuesta = await axios.put(`${apiUrl}/turnos/${id}`, { estado }, {withCredentials:true})
        return respuesta.data
    } catch (error) {
        console.error('Error en actualizarEstadoTurno:', error);
        throw error;
    }
}

export async function eliminarTurno(id) {
    try {
        const respuesta = await axios.delete(`${apiUrl}/turnos/${id}`, {withCredentials:true})
        return respuesta.data
    } catch (error) {
        console.error('Error en eliminarTurno:', error);
        throw error;
    }
}
