const express = require('express')
const port = 3000
const app = express()

const path = require('path')

// database
const mongodb = process.env.MONGODB || 'mongodb://localhost:27017/poc-mongoose'
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// template
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// routes
const routePages = require('./routes/pages')
app.use('/', routePages)

const routeSeries = require('./routes/series')
app.use('/series', routeSeries)

// assets
app.use(express.static(path.join(__dirname, 'public')))

mongoose
    .connect(mongodb)
    .then(() => {
        app.listen(port, console.log('Running Server'))
    })
    .catch(error => console.log(error))