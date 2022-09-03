const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('port',  3000)

const pruebaRebase= "rebase :)"
const nuevaVariable = "prueba"
app.listen(app.get('port'), ()=>{console.log('listening on port', app.get('port'))})
console.log("Mensaje de clase hola profe :)")
