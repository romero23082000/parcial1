/*
placa
marca
modelo
color
consecionarias
*/
const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    movie: {
        movie_name: {
            type: 'string',
            unique: true,
        },
        season: {
            type: 'string',
            unique: true
        },
        autors: [

        ]
    },
})

module.exports = mongoose.model('CarCollection', carSchema)