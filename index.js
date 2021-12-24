const express = require('express')
const port = 3000
const app = express()

const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// template
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index')
})

// assets
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, console.log('Running Server'))