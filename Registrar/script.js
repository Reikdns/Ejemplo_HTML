const apiBase =  "http://127.0.0.1:8000"

class Estudiante{
    nombre
    identificacion
    sexo
    fecha_nacimiento
    fecha_ingreso
    notas
}

function registrar(){

    fetch(apiBase + "/registrar", {
        method: 'POST',
        body: capturar(),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => alert(data))
    .catch(error => console.log(error))

}


function capturar(){
    let estudiante = new Estudiante()

    estudiante.nombre = document.querySelector("#nombre").value
    estudiante.identificacion = document.querySelector("#identificacion").value
    estudiante.sexo = document.querySelector("#sexo").value
    estudiante.fecha_nacimiento = document.querySelector("#fechaNacimiento").value
    estudiante.fecha_ingreso = document.querySelector("#fechaIngreso").value
    estudiante.notas = document.querySelector("#notas").value.split(",")

    return JSON.stringify(estudiante)
}