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