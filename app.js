var viajes_tiempo;
var viajes_tarde;
var viajes_totales;
var precision;
var meta = 95;
var dia = 0;
var barra;

function ejecutar() {
    viajes_tiempo = document.getElementById("dato1").value;
    viajes_tarde = document.getElementById("dato2").value;

    viajes_totales = parseInt(viajes_tiempo) + parseInt(viajes_tarde);
    precision = (viajes_tiempo / viajes_totales)*100;
    dia = dia + 1;
    barra = "|".repeat(precision);

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = dia;
    cell2.innerHTML = viajes_tiempo;
    cell3.innerHTML = viajes_tarde;
    cell4.innerHTML = viajes_totales;
    cell5.innerHTML = precision.toFixed(2);
    cell6.innerHTML = barra;
}