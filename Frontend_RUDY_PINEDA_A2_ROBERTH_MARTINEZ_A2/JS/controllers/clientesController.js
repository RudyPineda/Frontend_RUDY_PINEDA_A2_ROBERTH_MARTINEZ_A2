import {
    getClientes,
    getCliente,
    postClientes,
    putClientes,
    deleteClientes
} from '../services/clientesService.js';
const TXTreserva = document.getElementById('TXTreserva');
const TBtablaReserva = document.getElementById('BTNsubir');
const TXTvehiculos = document.getElementById('TXTvehiculos');
const TXTnombreReserva = document.getElementById('TXTnombreReserva');
const TMfechaReserva = document.getElementById('TMfechaReserva');
const NcantidadDias = document.getElementById('NcantidadDias');
const NcantidadPasajeros = document.getElementById('NcantidadPasajeros');
const TXTestado = document.getElementById('TXTestado');
const TXTclientes = document.getElementById('TXTclientes');
const BTNsubir = document.getElementById('BTNsubir');
const FRMreservas = document.getElementById('FRMreservas');
document.addEventListener('DOMContentLoaded',async function () {
 await getPersonas();   
});


FRMreservas.addEventListener('submit', async function (event) {
    event.preventDefault();
    const idReserva = idReserva.value.trim();
    const TXTclientes = TXTclientes.value.trim();
    const TXTnombreReserva = TXTnombreReserva.value.trim();
    const  TMfechaReserva= TMfechaReserva.value.trim();
    const  NcantidadPasajeros= NcantidadPasajeros.value.trim();
    const  NcantidadDias= NcantidadDias.value.trim();
    const  TXTestado= TXTestado.value.trim();
    if (nombreReserva === '' || fechaReserva === '' || fecha === '' || cantidad) {
    mostrarMensaje('Todos los campos son obligatorios.', 'danger');
    return;
    }
    const reserva = {
    name: nombre,
    email: correo,
    phone: telefono
    };
    try {
    if (id !== '') {
    await putReserva(id, reserva);
    mostrarMensaje('reserva actualizada correctamente.', 'success');
    } else {
    await postReserva(reserva);
    mostrarMensaje('reserva guardada correctamente.', 'success');
    }
    limpiarFormulario();
    await getReservas();
    } catch (error) {
    mostrarMensaje('No se pudo guardar la reserva.', 'danger');
    }
   });
   BTNCancelar.addEventListener('click', function () {
    limpiarFormulario();
   });
   async function ObtenerReservas() {
    try {
    const personas = await getReservas();
    tablaPersonas.innerHTML = '';
    personas.forEach(function (persona) {
    const nombre = persona.name || persona.nombre || 'Sin nombre';
    const correo = persona.email || persona.correo || 'Sin correo';
    const telefono = persona.phone || persona.telefono || 'Sin telefono';
    
    
    tablaPersonas.innerHTML += `
    <tr>
        <th scope="col">${id}</th>
            <th scope="col">${Cliente}</th>
            <th scope="col">${Vehiculo}</th>
            <th scope="col">${Nombrereserva}</th>
            <th scope="col">${Fechareserva}</th>
            <th scope="col">${Catidaddedías}</th>
            <th scope="col">${Cantidadpasajeros}</th>
            <th scope="col">${Estado}</th>
    <button type="button" class="btn btn-warning btn-sm me-2" 
   onclick="colocarDatosFormulario(${persona.id})">
    Editar
    </button>
    <button type="button" class="btn btn-danger btn-sm" onclick="borrarPersona($
   {persona.id})">
    Eliminar
    </button>
    </td>
    </tr>
    `;
    });
    } catch (error) {
    mostrarMensaje('No se pudieron cargar las personas.', 'danger');
    }
   }
   async function colocarDatosFormulario(id) {
    try {
    const persona = await getReserva(id);
    txtIdPersona.value = persona.id;
    txtNombre.value = persona.name || persona.nombre || '';
    txtCorreo.value = persona.email || persona.correo || '';
    txtTelefono.value = persona.phone || persona.telefono || '';
    btnGuardar.textContent = 'Actualizar persona';
    btnGuardar.className = 'btn btn-primary';
    btnCancelar.classList.remove('d-none');
    } catch (error) {
    mostrarMensaje('No se pudo cargar la persona para editar.', 'danger');
    }
   }
   async function borrarReserva(id) {
    const confirmar = confirm('Deseas eliminar esta persona?');
    if (!confirmar) {
    return;
    }
    try {
    await eliminarPersona(id);
    mostrarMensaje('Persona eliminada correctamente.', 'success');
    limpiarFormulario();
    await cargarPersonas();
    } catch (error) {
    mostrarMensaje('No se pudo eliminar la persona.', 'danger');
    }
   }
   function limpiarFormulario() {
    formPersona.reset();
    txtIdPersona.value = '';
    btnGuardar.textContent = 'Guardar persona'; 
    btnGuardar.className = 'btn btn-success';
    btnCancelar.classList.add('d-none');
   }
   function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `alert alert-${tipo}`;
    setTimeout(function () {
    mensaje.className = 'alert d-none';
    mensaje.textContent = '';
    }, 3000);
   }
   window.colocarDatosFormulario = colocarDatosFormulario;
   window.borrarReserva = borrarReserva