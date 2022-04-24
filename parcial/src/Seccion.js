const express = require('express');
const app = express();

app.listen(3000, (req, res) => {
    console.log('Servidor corriendo en el puerto 3000');
});
