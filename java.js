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
    

    let RES = "La suma de " + N1 + " + " + N2 + " es: " + sum + "<br></br>";
    
    if (sum == res_suma){
        RES = RES + "Tu RES es correcta";
        let T_final = (t2 - t1)/1000;
        RES = RES + "<br></br>Con un T_final de: " + T_final + " segundos";
    }
    else{
        RES = RES + "Tu RES es incorrecta";
        let T_final = (t2 - t1)/1000;
        RES = RES + "<br></br>Con un T_final de: " + T_final + " segundos";
    }
    
    return RES;

}

// Extraccion de numeros, emp
const emp = [2, 5, 0, -1, 10, 0, -7, 4, 0, -10,];
var C_Pos = 0;
var C_Ceros = 0;
var C_Neg = 0;

function M_Arreglo(){

    for(let i = 1; i <= emp.length; i++){
        if(emp[i] == 0){
            C_Ceros++;
          } else if (emp[i] < 0){
            C_Neg++;
          }else{
            C_Pos++;
          }
    }

    res_ex = "Numero de 0's: " + C_Ceros + "  Numeros positivos: " + C_Pos + "  Numeros negativos: " + C_Neg;

    return res_ex;
}


  
