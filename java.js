

//Tabla de cuadrados
function tabla() {
    let N_Solicitado = prompt("Ingresa un numero por favor: ");
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


function S_Aleatorios(){
    
    var N1 = Math.floor(Math.random()*1000);
    var N2 = Math.floor(Math.random()*1000);
    let sum = N1 + N2;
    var t1 = Date.now();
    const res_suma = prompt("¿Cuato da la s de:  " + N1 + "+" + N2 + "?");
    var t2 = Date.now();

    let RES = "La s de " + N1 + " + " + N2 + " es: " + sum + "<br></br>";
    
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
document.getElementById("Resultados 2").innerHTML = S_Aleatorios();

// Extraccion de numeros, emp


function M_Arreglo(){

    const emp = [2, 5, 0, -1, 10, 0, -7, 4, 0, -10,];
    var C_Pos = 0;
    var C_Ceros = 0;
    var C_Neg = 0;

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
document.getElementById("Resultados 3").innerHTML = M_Arreglo();

//Promedio de Matriz

function Matriz(){
    
    const M = [[0,4,7,10,6],[8,32,90,21,9],[15,61,5,1,100]];
    let m_p = [];
    var s = 0;

    for(let i = 0; i < M.length; i++){
      s = 0;
      for(let j = 0; j < M[i].length; j++){
        s += M[i][j];
      }
      
      m_p.push(s/M[i].length);
    }
    
    document.write("El promedio es: " );
    return m_p;
}
document.getElementById("Resultados 4").innerHTML = Matriz();

//Funcion inversa


function F_Inversa(num){

    var num = Math.floor( Math.random()*100);

    var inv = 0;
    inv = (num.toString().split('').reverse().join('')); 

    document.write("El numero inverso es: " + inv);
    return null;
}
document.getElementById("Numero Inverso").innerHTML = F_Inversa(num);


  
