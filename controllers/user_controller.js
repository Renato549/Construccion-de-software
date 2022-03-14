const User = require('../models/user_model');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.conts = (request, response, next) => {
    response.render('preg', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.login = (request, response, next) => {
    if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/users/conts'); 
    } else {
        response.redirect('/users/login'); 
    }
    
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};