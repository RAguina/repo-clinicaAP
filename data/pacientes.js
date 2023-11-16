import axios from 'axios';

const apiUrl = 'https://clinicaback-hngz.4.us-1.fl0.io';
const apiUrlPacientes = 'https://clinicaback-hngz.4.us-1.fl0.io/pacientes/'



export async function obtenerPacientes() {
    try {
      const respuesta = await axios.get('https://clinicaback-hngz.4.us-1.fl0.io/pacientes/', { withCredentials: true })
      console.log('Deberia andar');
      return respuesta.data;
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
      throw error;
    }
  }

export async function obtenerPaciente(id) {

    console.log(id);
    const respuesta = await axios.get(`${apiUrl}/pacientes/${id}`, { withCredentials: true })
    return respuesta.data
}

export async function agregarPaciente(datos) {
    try {
        const respuesta = await axios.post(`${apiUrl}/pacientes/`, { withCredentials: true }, datos)
        
        return respuesta.data
    } catch (error) {
        console.error('Error en agregarPaciente:', error);
        console.log(error)
        throw error;
    }
}

export async function actualizarPaciente(id, datos) {
    try {
        const respuesta = await axios.put(`${apiUrl}/pacientes/${id}`, { withCredentials: true }, datos)
        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarPaciente(id) {
    try {
        const respuesta = await axios.delete(`${apiUrl}/pacientes/${id}`, { withCredentials: true });
        return respuesta.data;
    } catch (error) {
        console.error('Error al eliminar el médico:', error);
    }
}