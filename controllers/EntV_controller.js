const path = require('path');
const pel = require('../models/ps/peliculas');
const se = require('../models/ps/series');

exports.get_newP = (request, response, next) => {
    response.render('newMo');
    username: request.session.username ? request.session.username : ''
};

exports.post_newP = (request, response, next) => {
    let pelicula = new pel(request.body.nombre);
    pelicula.save();
    response.setHeader('Set-Cookie', 'lastP='+ pelicula.nombre + '; HttpOnly', 'utf8');
    response.redirect('/EntV');
};

exports.get_newS = (request, response, next) => {
    response.render('newSe');
    username: request.session.username ? request.session.username : ''
};

exports.post_newS = (request, response, next) => {
    let serie = new se(request.body.nombre);
    serie.save();
    response.setHeader('Set-Cookie', 'lastS=' + serie.nombre + '; HttpOnly','utf8');
    response.redirect('/EntV');
};

exports.main = (request, response, next) => {
    response.render('Vis', {peliculas: pel.fetchAllPel(), series:se.fetchAllSe(),
    username: request.session.username ? request.session.username : '',
    lastP: request.cookies.lastP ? request.cookies.lastP : '',
    lastS: request.cookies.lastS ? request.cookies.lastS : '',
    })
}