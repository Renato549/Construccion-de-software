const path = require('path');
const pel = require('../models/ps/peliculas');
const se = require('../models/ps/series');

exports.get_newP = (request, response, next) => {
    response.render('newMo');
};

exports.post_newP = (request, response, next) => {
    let pelicula = new pel(request.body.nombre);
    pelicula.save();
    response.redirect('/EntV');
};

exports.get_newS = (request, response, next) => {
    response.render('newSe');
};

exports.post_newS = (request, response, next) => {
    let serie = new se(request.body.nombre);
    serie.save();
    response.redirect('/EntV');
};

exports.main = (request, response, next) => {
    response.render('Vis', {peliculas: pel.fetchAllPeliculas(), series:se.fetchAllSeries()})
}