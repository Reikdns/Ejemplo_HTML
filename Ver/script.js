var estudiantesJSON = []
var tabla = document.getElementById("tablaDatos");

const apiBase =  "http://127.0.0.1:8000"

function obtenerTodos(){
    const url = new URL(apiBase + "/obtener_todos").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        estudiantesJSON = data
        actualizarTabla()
    })
    .catch(error => console.log(error))
}


function actualizarTabla(){
    estudiantesJSON.forEach(function (estudiante) {
        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaIdentificacion= fila.insertCell(1);
        var celdaFechaNacimiento = fila.insertCell(2);
        var celdaFechaIngreso = fila.insertCell(3);
        var celdaSexo = fila.insertCell(4);
        var celdaNotas = fila.insertCell(5);
    
        celdaNombre.textContent = estudiante.nombre
        celdaIdentificacion.textContent = estudiante.identificacion
        celdaFechaNacimiento.textContent = estudiante.fecha_nacimiento
        celdaFechaIngreso.textContent = estudiante.fecha_ingreso
        celdaSexo.textContent = estudiante.sexo
        celdaNotas.textContent = (estudiante.notas.reduce((a,b) => a + b , 0)/estudiante.notas.length).toFixed(2)
      });
}

 

document.addEventListener('load', obtenerTodos())



