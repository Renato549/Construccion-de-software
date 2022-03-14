const express = require('express');

const router = express.Router();

const fs = require('fs');
const readline = require('readline');

const pel = [];
const se = [];


fs.readFile('./cont/peliculas.json', (err, data) => {
    if (err) throw err;
    pel = JSON.parse(data);
   
});


fs.readFile('./cont/se.json', (err, data) => {
    if (err) throw err;
    se = JSON.parse(data);
   
});

router.get('/newMo', (request, response, next) => {
    response.render('newMo');
});

router.post('/newMo', (request, response, next) => {
    pel.push(request.body);
    let pelicula = JSON.stringify(pel);
    fs.writeFileSync('./cont/peliculas.json', pelicula, 'utf8');
    response.redirect('/EntV');
    
       
});


router.get('/newSe', (request, response, next) => {
    response.render('newSe');
});

router.post('/newSe', (request, response, next) => {
    se.push(request.body);
    let serie = JSON.stringify(se);
    fs.writeFileSync('./cont/series.json', serie, 'utf8');
    response.redirect('/EntV');
       
});


router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('Vis', {pel: pel, se:se})
});

module.exports = router;