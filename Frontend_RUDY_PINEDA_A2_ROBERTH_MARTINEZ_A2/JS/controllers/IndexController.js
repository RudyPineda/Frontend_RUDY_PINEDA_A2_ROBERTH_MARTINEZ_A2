import {
    getReservas,
    getReserva,
    postReserva,
    putReserva,
    deleteReserva
} from '../services/reservas.js';

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
 await reserva();   
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
    const reservas = await getReservas();
    reservas.innerHTML = '';
    reservas.forEach(function (reserva) {
    const nombre = Cliente.id || Cliente.id || 'Sin cliente';
    const correo = Vehiculo.id || Vehiculo.id || 'Sin vehiculo';
    const Nombrereserva = Nombrereserva.reserva || Nombrereserva.reserva || 'Sin nombre de la reserva';
    const fechaReserva = Fechareserva.reserva || Nombrereserva.reserva || 'Sin fecha de la reserva';
    const Cantidadpasajeros = Cantidadpasajeros.reserva || Nombrereserva.reserva || 'Sin pasajeros';
    const  Catidaddedías = NombrCatidaddedíasereserva.reserva || Catidaddedías.reserva || 'Sin Catidad de días';
    const  Estado = Estado.reserva || Estado.reserva || 'Sin Estado ';
    TBtablaReserva.innerHTML += `
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
   onclick="colocarDatosFormulario(${id.reserva})">
    Editar
    </button>
    <button type="button" class="btn btn-danger btn-sm" onclick="borrarReserva(${reserva.id})">
    Eliminar
    </button>
    </td>
    </tr>
    `;
    });
    } catch (error) {
    mostrarMensaje('No se pudieron cargar las reservas.', 'danger');
    }
   }
   async function colocarDatosFormulario(id) {
    try {
    const reserva = await getReserva(id);
    idReserva.value = reserva.id;
    nombreReserva.value = reserva.name || reserva.nombre || '';
    re.value = reserva.email || reserva.correo || '';
    txtTelefono.value = reserva.phone || reserva.telefono || '';
    btnGuardar.textContent = 'Actualizar reserva';
    btnGuardar.className = 'btn btn-primary';
    btnCancelar.classList.remove('d-none');
    } catch (error) {
    mostrarMensaje('No se pudo cargar la reserva para editar.', 'danger');
    }
   }
   async function borrarReserva(id) {
    const confirmar = confirm('Deseas eliminar esta reserva?');
    if (!confirmar) {
    return;
    }
    try {
    await deleteReserva(id);
    mostrarMensaje('reserva eliminada correctamente.', 'success');
    limpiarFormulario();
    await getReservas();
    } catch (error) {
    mostrarMensaje('No se pudo eliminar la reserva.', 'danger');
    }
   }
   function limpiarFormulario() {
    FRMreservas.reset();
    idReserva.value = '';
    btnGuardar.textContent = 'Guardar reserva'; 
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