const express = require('express');//importar express
const app = express();//crear una instancia de express

app.use(express.urlencoded({ extended: false }));//para que se puedan enviar datos por post
app.use(express.json());//para que se puedan enviar datos por json
const dotenv = require('dotenv');//importar dotenv
dotenv.config({path:'./components/crearSeccion/.env'});//configurar dotenv

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('views engine', 'ejs');//para que se puedan cargar las vistas

const bcryptjs = require('bcryptjs');//importar bcrypt
//variable para iniciar seccion
const seccion = require('express-session');
app.use(seccion({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {//ruta raiz
    res.send('Hola mundo');
});

app.listen(3000, (req, res) => {
    console.log('Servidor corriendo en el puerto 3000');
});
