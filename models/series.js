const mongoose = require('mongoose')

const serieSchema = mongoose.Schema({
    title: String,
    description: String
})

const Serie = mongoose.model('Serie', serieSchema)

module.exports = Serie