import axios from 'axios';

const apiUrl = 'https://clinicaback-hngz.4.us-1.fl0.io';

export async function obtenerPacientes() {
    const respuesta = await axios.get(`${apiUrl}/pacientes/`)
    return respuesta.data
}   

export async function obtenerPaciente(id) {

    console.log(id);
    const respuesta = await axios.get(`${apiUrl}/pacientes/${id}`)
    return respuesta.data
}

export async function agregarPaciente(datos) {
    try {
        const respuesta = await axios.post(`${apiUrl}/pacientes/`, datos)
        
        return respuesta.data
    } catch (error) {
        console.error('Error en agregarPaciente:', error);
        throw error;
    }
}

export async function actualizarPaciente(id, datos) {
    try {
        const respuesta = await axios.put(`${apiUrl}/pacientes/${id}`, datos)
        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarPaciente(id) {
    try {
        // 1. Desactiva temporalmente la restricción de clave externa
        await axios.post(`${apiUrl}/desactivar-restriccion-externa`);

        // 2. Elimina el paciente
        const respuesta = await axios.delete(`${apiUrl}/pacientes/${id}`);

        // 3. Reactiva la restricción de clave externa
        await axios.post(`${apiUrl}/activar-restriccion-externa`);

        return respuesta.data;
    } catch (error) {
        console.error('Error al eliminar el paciente:', error);
        throw new Error('Error al eliminar el paciente');
    }
}


