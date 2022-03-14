const path = require('path');
const cant = require('../models/musica/cantantes');
const band = require('../models/musica/bandas');


exports.get_newC = (request, response, next) => {
    response.render('newCant');
};

exports.post_newC = (request, response, next) => {
    let cantante = new cant(request.body.nombre);
    cantante.save();
    response.redirect('/EntA');
};

exports.get_newB = (request, response, next) => {
    response.render('newBand');
};

exports.post_newB = (request, response, next) => {
    let banda = new band(request.body.nombre);
    banda.save();
    response.redirect('/EntA');
};


exports.main = (request, response, next) => {
    response.render('Mus', {cantantes: cant.fetchAllCant(),bandas : band.fetchAllBands()})
}
