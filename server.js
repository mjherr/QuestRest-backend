//DEPENDENCIES
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


//ROOT
app.get('/', (res, req) => {
    req.send('Hello World')
})

//CONTROLLERS
const userController = require('./controllers/user_controller')
const taskController = require('./controllers/task_controller')
app.use('/tasks', taskController)
app.use('/users', userController)

//LISTEN
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})


