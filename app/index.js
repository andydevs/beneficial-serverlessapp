/**
 * My first serverless app
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 21 - 2020
 */
const express = require('express')
const handlebars = require('express-handlebars')
const getName = require('./name')

// Port
const PORT = process.env.PORT || 8080

// Create app
const app = express()

// Add de handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Make index page or whatever
app.get('/', (_, res) => {
    let name = getName()
    res.render('index', { name })
})

// Listen
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
})