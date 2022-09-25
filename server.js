//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')



//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const sequelize = new Sequelize(process.env.PG_URI)


//ROOT
app.get('/', (res, req) => {
    req.send('Hello World')
})

const userController = require('./controllers/user_controller')
app.use('/users', userController)

const taskController = require('./controllers/task_controller')
app.use('/tasks', taskController)

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})


