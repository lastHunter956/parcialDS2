const mysql = require('mysql');

const conection = mysql.createConnection({//conexion a la base de datos
    host: 'localhost',//direccion del servidor
    user: 'root',//usuario de la base de datos
    password: '',//contraseña de la base de datos
    database: 'parcialds'//nombre de la base de datos a utilizar
});

conection.connect( (err) => {//err es una variable que se puede usar para verificar si hay un error
    if (err) throw err
        console.log('Conexion a la base de datos establecida')
})
const insertar = "INSERT INTO usuarios (nombre, apellido, correo, celular, clave, rol) VALUES ('lucas', 'garcia', 'lgarcia@utb.edu.co', '3052204282', '157', 'administrador')";
conection.query(insertar, (err, result) => {
    if (err) throw err
        console.log('Datos insertados')
})
conection.query('SELECT * FROM usuarios', (err, result) => {//consulta a la base de datos
    if (err) throw err
        console.log(`Los datos en la base de dato son: `)
        console.log(result)//result es un array con los datos 
        console.log(`La cantidad de datos es: `, result.length)//result.length es la cantidad de datos en el array
        console.log(`la primera persona es: ${result[0].nombre} y su codigo ${result[0].id_administrador} `)//result[0].nombre es el nombre de la persona
})  // SELECT * FROM usuarios

conection.end()
