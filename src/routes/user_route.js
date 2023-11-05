const express = require('express')
const { CreateUser, GetUsers, UpdateUsers, DeleteUser } = require('../controllers/user.controller')

const router = express.Router()

router.post('/create', CreateUser)

router.get('/getUsers', GetUsers)

router.put('/updateUser', UpdateUsers)

router.delete('/deleteUser', DeleteUser)


module.exports = router