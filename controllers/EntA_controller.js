const path = require('path');
const cant = require('../models/musica/cantantes');
const band = require('../models/musica/bandas');


exports.get_newC = (request, response, next) => {
    response.render('newCant');
    username: request.session.username ? request.session.username : ''
};

exports.post_newC = (request, response, next) => {
    let cantante = new cant(request.body.nombre);
    cantante.save();
    response.setHeader('Set-Cookie', 'lastC='+ cantante.nombre + '; HttpOnly', 'utf8');
    response.redirect('/EntA');
};

exports.get_newB = (request, response, next) => {
    response.render('newBand');
    username: request.session.username ? request.session.username : ''
};

exports.post_newB = (request, response, next) => {
    let banda = new band(request.body.nombre);
    banda.save();
    response.setHeader('Set-Cookie', 'lastB='+ banda.nombre + '; HttpOnly', 'utf8');
    response.redirect('/EntA');
};


exports.main = (request, response, next) => {
    response.render('Mus', {cantantes: cant.fetchAllCant(),bandas : band.fetchAllBands(),
    username: request.session.username ? request.session.username : '',
    lastC: request.cookies.lastP ? request.cookies.lastP : '',
    lastB: request.cookies.lastS ? request.cookies.lastS : '',
    })
}