const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const pel = [];
const se = [];

/*Función para leer archivos por línea .txt*/
function read (arch,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(arch),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', function(line) {
        array.push(line)
    });
}

read('cont/peliculas.txt',pel);
read('cont/series.txt',se)


function add(arch,data){
    fs.appendFile(arch, data + "\n", (err) => {
        if (err) throw err;
     });
}


router.get('/nuevaPeliculaAccion', (request, response, next) => {
    let res = ''
    res = res +('<!DOCTYPE html>');
    res = res +('<html lang="es-mx"><head>');
    res = res +('<title>Películas</title>');
    res = res +('<meta charset="utf-8">');
    res = res +('</head><body>');
    res = res +('<nav>')
    res = res +('<div>')
    res = res +('<a href="/peliculas">')
    res = res +(' Peliculas Favs')
    res = res +('</a>')
    res = res +('<span >')
    res = res +('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res +('</span></div></nav>')
    res = res +(' <div>')
    res = res +('<h1>Este sitio es de películas favoritas</h1>');
    res = res +('<h2>Agrega tu película favorita:</h2>');
    res = res +('<br>');
    res = res +('<form action="/EntV/nuevaPeli" method="POST">');
    res = res +('<label for="nombre">Nombre: </label> ');
    res = res +('<input type="text" id="nombre" name="nombre" placeholder="Tenet"');
    res = res +('<br><br>');
    res = res +('<a><input type ="submit" value="Enviar"></a>')
    res = res +('</form>');
    res = res +('<br><br>');
    res = res +('<a href="/EntV"><button type="button" >Regresar a la página</button></a>');
    res = res +('</div>')
    res = res +('</body>');
    response.send(res); 
});

router.post('/nuevaPeliculaAccion', (request, response, next) => {
    let new_data = request.body.nombre;
    pel.push(new_data); 
    response.redirect('/EntV');
    add("cont/peliculas.txt", new_data )
});


router.get('/nuevaSerie', (request, response, next) => {
    let res = ''
    res = res + ('<!DOCTYPE html>');
    res = res + ('<html lang="es-mx"><head>');
    res = res + ('<title>Series</title>');
    res = res + ('<meta charset="utf-8">');
    res = res + ('</head><body>');
    res = res + ('<nav>')
    res = res + ('<div>')
    res = res + ('<a href="/">')
    res = res + (' Series Favs')
    res = res + ('</a>')
    res = res + ('<span class="navbar-text">')
    res = res + ('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res + ('</span></div></nav>')
    res = res + (' <div >')
    res = res + ('<h1>Este sitio es de Series favoritas</h1>');
    res = res + ('<h2>Agrega tu serie favorita:</h2>');
    res = res + ('<br>');
    res = res + ('<form action="/EntV/nuevaSerie" method="POST">');
    res = res + ('<label for="nombre">Nombre: </label> ');
    res = res + ('<input type="text" id="nombre" name="nombre" placeholder="The Witcher"');
    res = res + ('<br><br>');
    res = res + ('<a href="/EntV"><input type ="submit" value="Enviar"></a>')
    res = res + ('</form>');
    res = res + ('<br><br>');
    res = res + ('<a href="/audioVisual"><button type="button" >Regresar a la página</button></a>');
    res = res + ('</div>')
    res = res + ('</body>');
    response.send(res); 
});

router.post('/nuevaSerie', (request, response, next) => {
    let new_data = request.body.nombre;
    se.push(new_data);
    response.redirect('/EntV');
    add("cont/series.txt", new_data )
});




router.use('/', (request, response, next) => {
//Ruta principal
    let res = '';
    res = res +('<!DOCTYPE html>');
    res = res +('<html lang="es-mx"><head>');
    res = res +('<meta charset="utf-8">');
    res = res +('<title>Lab11</title>');
    res = res +('</head><body>');
    res = res +('<nav>')
    res = res +('<div>')
    res = res +('<a href="/">')
    res = res +('Lo mejor de entretenimiento')
    res = res +('</a>')
    res = res +('<span >')
    res = res +('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res +('</span></div></nav>')
    res = res +(' <div>')
    res = res +('<h1 id="principal">Este sitio es para Películas y Series favoritas</h1><br>');
    res = res +('<br><p>Películas:</p>');
    res = res +('<ul ">');
    for (let i in pel) {
        res = res +('<li>' + pel[i] + '</li>');
    }
    console.log(peliculas)
     res = res + ('</ul>');
     res = res + ('<br>');
     res = res + ('<a href="EntV/nuevaPeli"><button type="button" >Agregar un nueva película</button></a>');
     res = res + ('<br><br>');
    
     //Series
     res = res + ('<br><p>Series:</p>');
     res = res + ('<ul class="list-group">');
    for (let i in se) {
        res = res +('<li>' + series[i] + '</li>');
    }
     res = res +('</ul>');
     res = res +('<br>');
     res = res +('<a href="audioVisual/nuevaSerie"><button type="button">Agregar una nueva serie</button></a>');
     res = res +('<br><br>');
     res = res + (' </div>')
     res = res + ('</body>');
     response.send(res);
});

module.exports = router;