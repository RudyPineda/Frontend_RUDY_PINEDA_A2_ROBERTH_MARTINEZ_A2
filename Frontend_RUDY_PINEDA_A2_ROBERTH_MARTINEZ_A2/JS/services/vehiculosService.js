const API_URL = '';


   export async function getVehiculos() {
       const respuesta = await fetch(API_URL);
       const resultado = await respuesta.json();
       if(!respuesta.ok) throw new (resultado.message||"Error al cargar datos");
       return resultado.data;
   }
   
  export async function getVehiculo(id) {
    try {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (!respuesta.ok) {
    throw new Error('Error al obtener la Reserva');
    }
    const reserva = await respuesta.json();
    return reserva;
    } catch (error) {
    console.error('Error en obtenerReservaID:', error);
    throw error;
    }
   }