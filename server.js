//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize a ${process.env.PG_URI}`)
// } catch (err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }


//ROOT
app.get('/', (res, req) => {
    req.send('Hello World')
})

//CONTROLLERS
const taskController = require('./controllers/task_controller')
app.use('/tasks', taskController)
const userController = require('./controllers/user_controller')
app.use('/users', userController)

//LISTEN
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})


