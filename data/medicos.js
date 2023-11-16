import axios from 'axios';

const apiUrl = 'https://clinicaback-hngz.4.us-1.fl0.io';

export async function obtenerMedicos() {
    const respuesta = await axios.get(`${apiUrl}/medicos/`)
    return respuesta.data
}   

export async function obtenerMedico(id) {

    console.log(id);
    const respuesta = await axios.get(`${apiUrl}/medicos/${id}`)
    return respuesta.data
}

export async function agregarMedico(datos) {
    try {
        const respuesta = await axios.post(`${apiUrl}/medicos/`, datos)
        
        return respuesta.data
    } catch (error) {
        console.error('Error en agregarMedico:', error);
        throw error;
    }
}

export async function actualizarMedico(id, datos) {
    try {
        const respuesta = await axios.put(`${apiUrl}/medicos/${id}`, datos)
        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarMedico(id) {
    try {
        const respuesta = await axios.delete(`${apiUrl}/medicos/{id}`);
        return respuesta.data;
    } catch (error) {
        console.error('Error al eliminar el médico:', error);
    }
}

