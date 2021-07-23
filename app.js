const express = require('express')


const app = express()

const path = require('path')

const port = 3000

app.use(express.static('public'));

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'view', 'home.html')) )

app.get('/about',(req, res) => res.sendFile(path.join(__dirname, 'view', 'about.html')) )

app.get('/contact',(req, res) => res.sendFile(path.join(__dirname, 'view', 'contact.html')) )

app.get('/music',(req, res) => res.sendFile(path.join(__dirname, 'view', 'music.html')) )

app.listen(port,()=>console.log('Servidor corriendo en el puerto ' + ' http://localhost:' + port))