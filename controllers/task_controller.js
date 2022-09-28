//DEPENDENCIES
const express = require('express')
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

//CREATE A TASK
tasks.post('/', async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new task',
            data: newTask
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE A TASK
tasks.put('/:id', async (req, res) => {
    try {
        const updatedTasks = await Task.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedTasks} task(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE A TASK
tasks.delete('/:id', async (req, res) => {
    try {
        const deletedTasks = await Task.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedTasks} task(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = tasks
