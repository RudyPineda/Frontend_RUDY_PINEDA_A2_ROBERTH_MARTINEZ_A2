const API_URL = '';


   export async function getReservas() {
       const respuesta = await fetch(API_URL);
       const resultado = await respuesta.json();
       if(!respuesta.ok) throw new (resultado.message||"Error al cargar datos");
       return resultado.data;
   }
   
  export async function getReserva(id) {
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
   
   
   export async function postReserva(id,cliente){
       const respuesta = await fetch(API_URL,{
   method: "POST",
   headers : {"conten-Type":"application/json"},
   body : JSON.stringify(Reserva)
   });
   const resultado = await respuesta.json();
   if(!respuesta.ok) throw new error(resultado.message || "Error al crear cliente");
    return resultado.data;
   }



     
   export async function putReserva(id,cliente){
    const respuesta = await fetch(`${API_URL}/${id}`,{
method: "PUT",
headers : {"conten-Type":"application/json"},
body : JSON.stringify(Reserva)
});
const resultado = await respuesta.json();
if(!respuesta.ok) throw new error(resultado.message || "Error al crear cliente");
 return resultado.data;
}


  
export async function deleteReserva(id,cliente){
    const respuesta = await fetch(`${API_URL}/${id}`,{
        method: "DELETE",
        headers : {"conten-Type":"application/json"},
        body : JSON.stringify(Reserva)
        });
        const resultado = await respuesta.json();
        if(!respuesta.ok) throw new error(resultado.message || "Error al delete cliente");
         return resultado.data;
        }



