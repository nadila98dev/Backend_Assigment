require('dotenv').config();
const express = require('express')
const PORT = process.env.SERVER_PORT || '4646'

const productRoute = require('./routes/product_route')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req, res) => {
    res.send('Hello World')
});

app.use('/api/product', productRoute)

app.listen(PORT, () => {console.log('server is running on ' + PORT)})