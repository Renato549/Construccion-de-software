const express = require('express');

const router = express.Router();

const fs = require('fs');
const readline = require('readline');

const Cant = [];
const Band = [];


fs.readFile('./cont/cantantes.json', (err, data) => {
    if (err) throw err;
    Cant = JSON.parse(data);
   
});

fs.readFile('./cont/Band.json', (err, data) => {
    if (err) throw err;
    Band = JSON.parse(data);
   
});


router.get('/newCant', (request, response, next) => {
    response.render('newCant');
});

router.post('/newCant', (request, response, next) => {
    Cant.push(request.body);
    let artista = JSON.stringify(Cant);
    fs.writeFileSync('./cont/cantantes.json', artista, 'utf8');
    response.redirect('/EntA');
   
       
});


router.get('/newBand', (request, response, next) => {
    response.render('newBand');
});

router.post('/newBand', (request, response, next) => {
    Band.push(request.body);
    let banda= JSON.stringify(Band);
    fs.writeFileSync('./cont/bandas.json', banda, 'utf8');
    response.redirect('/EntA');
       
});

router.use('/', (request, response, next) => {
    response.render('Mus', {Cant: Cant, Band: Band});
});

module.exports = router;