const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//invocamos a dotenv para que nos cargue las variables de entorno
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

//directorio publico
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname+'/public'));
//establecemos el motor de plantillas
app.set('view engine', 'ejs');

//invocamos a bcryptjs para encriptar las contraseñas

const bcryptjs = require('bcryptjs');
//variables de seccion
const session = require('express-session');

//invocamos al modulo de conexion de la base de datos
const conection = require('./database/db');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(3000, (req, res) => {
    console.log('Servidor corriendo en el puerto 3000');
});


