//DEPENDENCIES
const express = require('express')
const users = require('express').Router()
const db = require('../models')
const { User } = db


//FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND SPECIFIC USER
users.get('/', async (req, res) => {
    try {
        const foundUser = await User.findAll({
            where: { task_type: 'quest' }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = users