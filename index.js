const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('port',  3000)


const user = "andreshito435"
const password = "andres123"
const DB_NAME = "Electiva_1"
const uri = `mongodb+srv://${user}:${password}@cluster0.qiaqzpq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri).then(()=>console.log("Connect"))
.catch(e => console.log(e))

app.listen(app.get('port'), ()=>{console.log('listening on port', app.get('port'))})
