const express = require('express');
const bodyParser = require('body-parser');

const r_V = require('./routes/EntV.routes');
const r_A = require('./routes/EntA.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/EntV', r_V);
app.use('/EntA', r_A);

//Middleware
app.use((request, response, next) => {
    response.render('preg');
    next();
});

app.listen(3000);