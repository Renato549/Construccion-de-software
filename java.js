let N_Solicitado = prompt("Ingresa un numero por favor: ");

//Tabla de cuadrados
function tabla() {
    let res = "<table>";
    for (let i = 1; i <= N_Solicitado; i++) {
        res += "<tr>";
        res += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        res += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}

document.getElementById("Resultados").innerHTML = tabla();


//Suma random
var N1 = Math.floor(Math.random()*10);
var N2 = Math.floor(Math.random()*10);
let sum = N1 + N2;
var t1 = Date.now();
const res_suma = prompt("¿Cuato da la suma de:  " + N1 + "+" + N2 + "?");
var t2 = Date.now();

function S_Aleatorios(){
    
    
    var tiempo_final = Date.now();
    // sacamos tiempo en que tardo en contestar
    var timer = (tiempo_final-t)/1000;
    // confirmamos que la respuesta sea correcta
    if (res_suma == sum){;
      document.write("</br><h3> Ejercicio 2 -> sumatoria de aleatorio</h3>");
      document.write("Correcto, tardaste: " + timer + " seg en contestar");
    }
    else{
      document.write("</br><h3> Ejercicio 2 -> sumatoria de aleatorio</h3>");
      document.write("Incorrecto, tardaste: " +  + timer + " seg en contestar");
    }
    return null;
  }
  
