import axios from 'axios';

const apiUrl = 'https://clinicaback-hngz.4.us-1.fl0.io/pacientes/';
const apiUrlPacientesId = 'https://clinicaback-hngz.4.us-1.fl0.io/pacientes/:id'



export async function obtenerPacientes() {
    try {
      const respuesta = await axios.get('https://clinicaback-hngz.4.us-1.fl0.io/pacientes/')
      return respuesta.data;
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
      throw error;
    }
  }

export async function obtenerPaciente(id) {

    console.log(id);
    const respuesta = await axios.get(apiUrlPacientesId)
    return respuesta.data
}

export async function agregarPaciente(datos) {
    try {
        const respuesta = await axios.post(apiUrl, datos)
        
        return respuesta.data
    } catch (error) {
        console.error('Error en agregarPaciente:', error);
        console.log(error)
        throw error;
    }
}

export async function actualizarPaciente(id, datos) {
    try {
        const respuesta = await axios.put(apiUrlPacientesId, datos)
        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarPaciente(id) {
    try {
        const respuesta = await axios.delete(apiUrlPacientesId);
        return respuesta.data;
    } catch (error) {
        console.error('Error al eliminar el médico:', error);
    }
}