const express = require('express')
const person_routes = express.Router()

// Crear nueva persona
movie_routes.post('/movie',(req,res)=>{})
// Listar todas las personas
movie_routes.get('/movies',(req,res)=>{})
// Consultar una persona en especifico
movie_routes.get('/movie/:idMovie',(req,res)=>{})
// Actualizr una persona en especifico
movie_routes.put('/movie/:idMovie',(req,res)=>{})
// Borra un usuario en especifico
movie_routes.delete('/movie/:idMovie',(req,res)=>{})

module.exports = movie_routes

// 17.0.1