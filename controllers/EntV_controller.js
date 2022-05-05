const path = require('path');
const Peliculas = require('../models/audioVisual/peliculas');
const Series = require('../models/audioVisual/series');



exports.get_newMo = (request, response, next) => {
    Peliculas.fetchAllMovies()
        .then(([rows, fieldData]) => {
            response.render('newMo', {
                peliculas: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
}
   

exports.post_newMo = (request, response, next) => {    
    const pel = new Peliculas(request.body.nombre, request.body.descripcion,request.body.imagen);
    pel.save().then(() => {
        response.setHeader('Set-Cookie', 'ultima_pelicula='+ pel.nombre +'; HttpOnly', 'utf8');
        response.render('/EntV')
    })
    .catch(err => console.log(err));
    
};



exports.get_newSe = (request, response, next) => {
    Series.fetchAllSeries()
    .then(([rows, fieldData]) => {
        response.render('newSe', {
            series: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
}

exports.post_newSe = (request, response, next) => {

    const serie = new Series(request.body.nombre, request.body.descripcion,request.body.imagen);
    serie.save().then(() => {
        response.setHeader('Set-Cookie', 'ultima_serie='+serie.nombre+'; HttpOnly', 'utf8');
        response.redirect('/EntV');
    }).catch(err => console.log(err));
};


exports.root = (request, response, next) => {
    Peliculas.fetchAllPeliculas()
    .then(([peliculas, fieldData]) => {
        Series.fetchAllSeries()
        .then(([series,fieldData]) =>{
            response.render('Vis', {
                peliculas: peliculas,
                series: series,
                username: request.session.username ? request.session.username : '',
                ultima_pelicula: request.cookies.ultima_pelicula ? request.cookies.ultima_pelicula : '',
                ultima_serie: request.cookies.ultima_serie ? request.cookies.ultima_serie : '',
                ultima_caricatura: request.cookies.ultima_caricatura ? request.cookies.ultima_caricatura : ''
            })
        })
        .catch(error => {
            console.log(error);
        });   
    })
    .catch(err => console.log(err)); 
  
        
}