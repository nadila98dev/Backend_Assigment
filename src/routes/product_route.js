const express = require('express')
const {getAllData, getDataById} = require('../controllers/product_controllers')

const router = express.Router()

router.get('/all', getAllData)

router.get('/iniid', getDataById)

module.exports = router