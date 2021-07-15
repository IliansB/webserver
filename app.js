const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

//Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ilians Bastos',
        titulo: 'Curso node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ilians Bastos',
        titulo: 'Curso node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ilians Bastos',
        titulo: 'Curso node'
    })
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta')
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
