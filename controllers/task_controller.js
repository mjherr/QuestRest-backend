//DEPENDENCIES
const tasks = require('express').Router()
const db = require('../models')
const { Task } = db

//FIND ALL TASKS
tasks.get('/', async (req, res) => {
    try {
        const foundTasks = await Task.findAll()
        res.status(200).json(foundTasks)
    } catch (error) {
        res.status(500).json(error)
    }
})

tasks.get('/:id', async (req, res) => {
    try {
        const foundUserTasks = await Task.findAll({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUserTasks)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = tasks
