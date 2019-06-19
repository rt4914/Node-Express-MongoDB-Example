const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes') 

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser({ extended: false }))


mongoose.connect('mongodb://127.0.0.1:27017/todolist',
 {useNewUrlParser: true})
 .then(()=>{
     console.log('Database connected')
 })
 .catch((error) =>{
     console.log(error)
 })


app.listen(8000, '127.0.0.1', ()=>{
    console.log('Server started ... ')
})

routes(app)
