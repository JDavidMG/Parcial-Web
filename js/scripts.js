// scripts.js
$(document).ready(function() {
    // Consulta de Vuelos
    $('#flightSearchForm').submit(function(event) {
        event.preventDefault(); // Evitar el envío por defecto
        
        // Obtener los valores del formulario
        const origin = $('#origin').val();
        const destination = $('#destination').val();
        const date = $('#date').val();
        const status = $('#status').val();

        // Simulación de resultados de vuelos
        $('#flightResults').html(`
            <h4>Resultados de vuelos de ${origin} a ${destination} para el ${date} (${status === 'on-time' ? 'A tiempo' : status === 'delayed' ? 'Retrasado' : 'Todos'})</h4>
            <ul>
                <li>Vuelo 101: A tiempo</li>
                <li>Vuelo 202: Retrasado</li>
            </ul>
        `);
    });

    // Reserva de Estacionamiento
    $('#parkingReservationForm').submit(function(event) {
        event.preventDefault();
        const entryDate = $('#entryDate').val();
        const exitDate = $('#exitDate').val();

        // Simulación de reserva de estacionamiento
        $('#reservationStatus').html(`<h4>Reserva de estacionamiento realizada de ${entryDate} a ${exitDate}</h4>`);
    });

   

    // Reporte de Incidencias
    $('#incidentReportForm').submit(function(event) {
        event.preventDefault();
        const incidentDescription = $('#incidentDescription').val();

        // Agregar la incidencia a la lista de reportes
        $('#incidentReports').append(`
            <div class="alert alert-warning" role="alert">
                ${incidentDescription}
            </div>
        `);
        // Limpiar el campo de texto después de registrar
        $('#incidentDescription').val(''); 
    });
});
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true }; // Cambiar hour12 a true
    document.getElementById('currentTime').innerText = now.toLocaleTimeString('es-ES', options);
}

setInterval(updateTime, 1000); // Actualiza la hora cada segundo
updateTime(); // Llama a la función inmediatamente para mostrar la hora al cargar la página
let employees = [
    { nombre: "Juan Pérez", rol: "Piloto" },
    { nombre: "Ana Gómez", rol: "Azafata" },
    { nombre: "Carlos López", rol: "Mecánico" }
];
function renderEmployees() {
    const employeeTableBody = document.getElementById('employeeTableBody');
    employeeTableBody.innerHTML = ''; 
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.nombre}</td>
            <td>${employee.rol}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Eliminar</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });
}

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const nombre = prompt("Introduce el nombre del empleado:");
    const rol = prompt("Introduce el rol del empleado:");
    if (nombre && rol) {  
        const newEmployee = { nombre: nombre, rol: rol };
        employees.push(newEmployee);
        renderEmployees();
    } else {
        alert("Debe introducir un nombre y un rol para el empleado.");
    }
});
function deleteEmployee(index) {
    employees.splice(index, 1); 
    renderEmployees(); 
}
renderEmployees();
$(document).ready(function() {
    // Manejar el envío del formulario de reporte de incidencias
    $('#incidentReportForm').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const description = $('#incidentDescription').val(); // Obtener la descripción de la incidencia
        const incidentNumber = $('#incidentReports .list-group-item').length + 1; // Número de la nueva incidencia

        // Agregar la nueva incidencia a la lista con formato igual
        $('#incidentReports .list-group').append(`
            <li class="list-group-item">
                <strong>Incidencia #${incidentNumber}:</strong> ${description}.
            </li>
        `);

        $('#incidentDescription').val(''); // Limpiar el campo de texto
    });
});
