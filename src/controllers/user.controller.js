const knex = require('../knexmodel/knex')

const CreateUser = async (req, res) => {
    try{
        const body = req.body
        // console.log(body)

        const insertData = await knex('users').insert({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            username: body.username,
            password: body.password
        })
       

        return res.status(201).send('sukses')

    } catch (error) {
        console.log(error)
        return res.status(500).send('Internet server error', error)
    }
}

module.exports= {CreateUser}