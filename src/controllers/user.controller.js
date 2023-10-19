const knex = require("knex")

const CreateUser = async (req, res) => {
    try{
        const body = req.body
   
        const inserData = await knex('users').insert({
            fisrtname: body.fisrtname,
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