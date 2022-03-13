
const fs = require("fs");
const readline = require('readline');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const routeP = require('./routes/EntV.routes');
const routeS = require('./routes/EntA.routes');

app.use('/EntV', routeP);

app.use('/EntA', routeS);

app.use((request, response,next) => {
    let res = '';
    res = res +('<!DOCTYPE html>');
    res = res +('<html lang="es-mx"><head>');
    res = res +('<meta charset="utf-8">');
    res = res +('<title>Lab11</title>');
    res = res +('</head><body>');
    res = res +('<nav')
    res = res +('<div')
    res = res +('<a href="/">')
    res = res +('Lomejor que hay')
    res = res +('</a>')
    res = res +('<span class="navbar-text">')
    res = res +('<b>Renato Sebastian Ramirez Calva</b><br>Lab11')
    res = res +('</span></div></nav>')
    res = res +('<div>')
    res = res +('<h1>Aqui esta lo chido que entretiene </h1><br>');
    res = res +('<br>');
    res = res +('<p>Peliculas, series:</p>');
    res = res +('<a href="/EntV"><button type="button">Dale a las peliculas y series</button></a>');
    res = res +('<br><br>');
    res = res +('<p>Música:</p>');
    res = res +('<a href="/musica"><button type="button">Dale a la musica</button></a>');
    res = res +('<br><br>');
    res = res + ('</div>')
    res = res + ('</body>');
     
    response.send(res)
    next();

});

app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esto no existe bye");
});

app.listen(3000);

