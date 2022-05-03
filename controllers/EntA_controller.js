const path = require('path');
const Cant = require('../models/cantantes');
const Band = require('../models/bandas');


exports.get_newcant = (request, response, next) => {
    Cant.fetchAllCant()
        .then(([rows, fieldData]) => {
            response.render('newCant', {
                cantantes: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_newcant = (request, response, next) => {
    const cantante = new Cant(request.body.nombre, request.body.sinopsis,request.file.filename);
    cantante.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_cantante_agregado=' + cantante.nombre + '; HttpOnly', 'utf8');
        response.redirect('/EntA');

    })
    .catch(err => console.log(err));
};

exports.get_newband = (request, response, next) => {
    Band.fetchAllBand()
        .then(([rows, fieldData]) => {
            response.render('newBand', {
                bandas: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_newband = (request, response, next) => {
    const banda = new Band(request.body.nombre, request.body.sinopsis,request.file.filename);
    banda.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_Banda_agregada=' + banda.nombre + '; HttpOnly', 'utf8');
        response.redirect('/EntA');
    })
    .catch(err => console.log(err));
};


exports.root = (request, response, next) => {

    Cant.fetchAllCant()
        .then(([artistas, fieldData]) => {
            Band.fetchAllBand()
            .then(([bandas,fieldData]) => {
                response.render('Mus', {
                    cantantes: cantantes,
                    bandas:bandas,
                    username: request.session.username ? request.session.username : '',
                    ultimo_cantante: request.cookies.ultimo_cantante ? request.cookies.ultimo_cantante : '',
                    ultima_banda: request.cookies.ultima_banda ? request.cookies.ultima_banda : ''
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error =>{
            console.log(error);
        });
    }
