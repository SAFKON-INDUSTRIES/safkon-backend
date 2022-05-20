const express = require('express')
const Router = express.Router()
const checkUser = require('../middleware/checkUser')
const saveData = require('./routeController/saveData')
const getData = require('./routeController/getData')
const loginData = require('./routeController/loginData')
const signupData = require('./routeController/signupData')

Router.get('/getinfo', checkUser, getData)
Router.post('/saveinfo', saveData)
Router.post('/login', loginData)
Router.post('/signup', signupData)
module.exports = Router