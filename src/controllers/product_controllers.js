const productData = require('../models/MOCK_DATA.json')

const getAllData = (req, res) => {
    const result = productData || null

    if(!result) return res.send({error: 'Data not found'})

    res.send({data: result})

   
   }

   const getDataById = (req, res) => {
    const id = 1

    const result = productData[id]

    if(!result) return res.send({error: 'Data not found'})

    res.send({data: result})

}

module.exports = {getAllData, getDataById}