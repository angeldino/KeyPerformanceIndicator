var viajes_tiempo;
var viajes_tarde;
var viajes_totales;
var precision;
var meta = 95;
var dia = 0;

function ejecutar() {
    viajes_tiempo = document.getElementById("dato1").value;
    viajes_tarde = document.getElementById("dato2").value;

    viajes_totales = parseInt(viajes_tiempo) + parseInt(viajes_tarde);
    precision = (viajes_tiempo / viajes_totales)*100;
    dia = dia + 1;

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = dia;
    cell2.innerHTML = viajes_tiempo;
    cell3.innerHTML = viajes_tarde;
    cell4.innerHTML = viajes_totales;
    cell5.innerHTML = precision.toFixed(2);
}

// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Ventas por mes",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});