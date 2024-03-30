const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

//Crear el sevidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/assesment', require('./routes/assesment'));
app.use('/api/course', require('./routes/course'));
app.use('/api/grade', require('./routes/grade'));
app.use('/api/report', require('./routes/report'));
app.use('/api/student', require('./routes/student'));
app.use('/api/subject', require('./routes/subject'));




//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});