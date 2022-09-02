const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('port',  3000)

app.listen(app.get('port'), ()=>{console.log('listening on port', app.get('port'))})
