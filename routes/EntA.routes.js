const express = require('express');

const router = express.Router();

const fs = require('fs');
const readline = require('readline');

const Cant = [];
const Band = [];


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


read('cont/cantantes.txt',Cant);
read('cont/bandas.txt',Band);


function add(arch,data){
    fs.appendFile(arch, data + "\n", (err) => {
        if (err) throw err;
     });
}

router.get('/newCant', (request, response, next) => {
    let res = ''
    res = res +('<!DOCTYPE html>');
    res = res +('<html lang="es-mx"><head>');
    res = res +('<title>Artistas</title>');
    res = res +('<meta charset="utf-8">');
    res = res +('</head><body>');
    res = res +('<nav>')
    res = res +('<div>')
    res = res +('<a href="/EntA">')
    res = res +(' Lo mejor para escuchar')
    res = res +('</a>')
    res = res +('<span class="navbar-text">')
    res = res +('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res +('</span></div></nav>')
    res = res +(' <div class="container ">')
    res = res +('<h1 id="principal">Este sitio es de Aristas favoritos</h1>');
    res = res +('<h2>Agrega tu artista favorito:</h2>');
    res = res +('<br>');
    res = res +('<form action="/EntA/newCant" method="POST">');
    res = res +('<label for="nombre">Nombre: </label> ');
    res = res +('<input type="text" id="nombre" name="nombre" placeholder="Des rocs"');
    res = res +('<br><br>');
    res = res +('<a><input type ="submit" value="Enviar"></a>')
    res = res +('</form>');
    res = res +('<br><br>');
    res = res +('<a href="/EntA"><button type="button" >Regresar a la página</button></a>');
    res = res +('</div>')
    res = res +('</body>');
    response.send(res); 
});

router.post('/newCant', (request, response, next) => {
    let new_Data = request.body.nombre;
    Cant.push(new_Data);
    response.redirect('/EntA');
    add("cont/Cant.txt", new_Data )
       
});

router.get('/newBand', (request, response, next) => {
    let res = ''
    res = res + ('<!DOCTYPE html>');
    res = res + ('<html lang="es-mx"><head>');
    res = res + ('<title>Bandas</title>');
    res = res + ('<meta charset="utf-8">');
    res = res + ('</head><body>');
    res = res + ('<nav>')
    res = res + ('<div>')
    res = res + ('<a href="/">')
    res = res + (' Lo mejor para escuchar')
    res = res + ('</a>')
    res = res + ('<span class="navbar-text">')
    res = res + ('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res + ('</span></div></nav>')
    res = res + (' <div>')
    res = res + ('<h1>Este sitio es de bandas</h1>');
    res = res + ('<h2>Agrega una banda</h2>');
    res = res + ('<br>');
    res = res + ('<form action="/EntA/newBand" method="POST">');
    res = res + ('<label for="nombre">Nombre: </label> ');
    res = res + ('<input type="text" id="nombre" name="nombre" placeholder="Royal Blood"');
    res = res + ('<br><br>');
    res = res + ('<a href="/EntA"><input type ="submit" value="Enviar"></a>')
    res = res + ('</form>');
    res = res + ('<br><br>');
    res = res + ('<a href="/EntA"><button type="button">Regresar a la página</button></a>');
    res = res + ('</div>')
    res = res + ('</body>');
    response.send(res); 
});

router.post('/newBand', (request, response, next) => {
    let new_Data = request.body.nombre;
    Band.push(new_Data);
    response.redirect('/EntA');
    add("cont/Band.txt", new_Data )
       
});


router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    let res = '';
    res = res +('<!DOCTYPE html>');
    res = res +('<html lang="es-mx"><head>');
    res = res +('<meta charset="utf-8">');
    res = res +('<title>Lo mejor para escuchar</title>');
    res = res +('</head><body>');
    res = res +('<nav>')
    res = res +('<div>')
    res = res +('<a href="/">')
    res = res +('Lo mejor para escuchar')
    res = res +('</a>')
    res = res +('<span>')
    res = res +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    res = res +('</span></div></nav>')
    res = res +(' <div>')
    res = res +('<h1 id="principal">Este sitio es de Artistas y Bandas favoritas </h1><br>');
    res = res +('<br><p>Artistas:</p>');
    res = res +('<ul>');
    for (let i in Cant) {
        res = res +('<li>' + Cant[i] + '</li>');
    }
    console.log(Cant)
     res = res + ('</ul>');
     res = res + ('<br>');
     res = res + ('<a href="EntA/newCant"><button type="button">Agregar un nuevo Artista</button></a>');
     res = res + ('<br><br>');
    
     //Bandas
     res = res + ('<br><p>Bandas:</p>');
     res = res + ('<ul>');
    for (let i in Band) {
        res = res +('<li>' + Band[i] + '</li>');
    }
     res = res +('</ul>');
     res = res +('<br>');
     res = res +('<a href="EntA/newBand"><button type="button" >Agregar una nueva Banda</button></a>');
     res = res +('<br><br>');

     response.send(res);
});

module.exports = router;