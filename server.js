//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')



//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const sequelize = new Sequelize(process.env.PG_URI)


try {
    sequelize.authenticate()
    console.log(`Connected with Sequelize a ${process.env.PG_URI}`)
} catch (err) {
    console.log(`Unable to connect to PG: ${err}`)
}


//ROOT
app.get('/', (res, req) => {
    req.send('Hello World')
})

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})


