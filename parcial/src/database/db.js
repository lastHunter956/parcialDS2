const mysql = require('mysql');

const conection = mysql.createConnection({//conexion a la base de datos
    host: process.env.DB_HOST,//direccion del servidor
    user:  process.env.DB_USER,//usuario de la base de datos
    password:  process.env.DB_PASS,//contraseña de la base de datos
    database:  process.env.DB_NAME//nombre de la base de datos a utilizar
});

conection.connect( (err) => {//err es una variable que se puede usar para verificar si hay un error
    if (err){
        console.log('el error de la conexion es: '+err);
        return;
    }console.log('Conexion a la base de datos establecida')
});
module.exports = conection;//exportamos la conexion