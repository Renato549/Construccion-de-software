const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

const r_V = require('./routes/EntV.routes');
const r_A = require('./routes/EntA.routes');
const r_U = require('./routes/user.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'Hey', 
    resave: false, 
    saveUninitialized: false,
}));
app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});


app.use('/users', r_U);
app.use('/EntV', r_V);
app.use('/EntA', r_A);


app.use((request, response, next) => {
    response.render('/users');
    next();
});

app.listen(3000);