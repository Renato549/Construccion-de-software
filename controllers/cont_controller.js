const path = require('path');

exports.cont = (request, response, next) => {
    response.render('preg', {
    username: request.session.username ? request.session.username : '',
    }); 
}