var datosJSON = []
var tabla = document.getElementById("tablaDatos");

const apiBase =  "http://127.0.0.1:8000"

function obtenerTodos(){
    const url = new URL(apiBase + "/obtener_todos").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        datosJSON = data
        actualizarTabla()
    })
}

function obtenerPorIdentificacion(){
    const params = {identificacion: document.querySelector("#buscarInput").value}
    const url = new URL(apiBase + "/obtener_por_identificacion")
    url.search = new URLSearchParams(params).toString()

    fetch(url)
    .then(response => response.json())
    .then(data => {
        datosJSON = [data]
        actualizarTabla()
    })
    .catch(error => obtenerTodos())
}

function actualizarTabla(){
    datosJSON.forEach(function (dato) {
        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaIdentificacion= fila.insertCell(1);
        var celdaFechaNacimiento = fila.insertCell(2);
        var celdaFechaIngreso = fila.insertCell(3);
        var celdaSexo = fila.insertCell(4);
        var celdaNotas = fila.insertCell(5);
    
        celdaNombre.textContent = dato.nombre;
        celdaIdentificacion.textContent = dato.identificacion
        celdaFechaNacimiento.textContent = dato.fecha_nacimiento
        celdaFechaIngreso.textContent = dato.fecha_ingreso
        celdaSexo.textContent = dato.sexo
        celdaNotas.textContent = dato.notas
      });
}

function limpiarTabla() {
    // Obtener el cuerpo de la tabla
    var cuerpoTabla = tabla.querySelector("tbody");

    // Eliminar todas las filas del cuerpo de la tabla
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}


document.addEventListener('load', obtenerTodos())

class Estudiante{
    nombre
    identificacion
    fecha_nacimiento
    fecha_ingreso
    sexo
    notas
}

    

