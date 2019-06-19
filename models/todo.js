const mongoose = require('mongoose')

const todoObject = mongoose.Schema({

    title: String,
    status: String,
    timestamp: String

})

module.exports = 
mongoose.model('todo',todoObject)