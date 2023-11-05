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

const GetUsers = async (req, res) => {
    try {
        const allUsers = await knex.select().from('users')

        return res.status(200).send({
            message: 'success get data user',
            allUsers
        })

    } catch(error){
        console.log(error)
        return res.status(500).send('Internet server error', error)
    }
}

const UpdateUsers = async (req, res) => {
    try{
        const body = req.body

        const updateData = await knex('users').where({
            username: body.username
        }).update({
            firstname: body.firstname
        })

        return res.status(201).send('Update user success'
        )


    } catch (error){
        console.log(error)
        return res.status(500).send('Internet server error', error)
    }
}

const DeleteUser = async (req,res) => {
    try{
        const body = req.body

        const deleteId = await knex('users').where({id: body.id}).del()

        if(!deleteId) return res.status(401).send({message: 'ID not found'})

        return res.status(200).send({message: 'Delete user has been siccess'})
    } catch(error){
        console.log(error)
        return res.status(500).send('Internet server error', error)
    }
}

module.exports= {CreateUser, GetUsers, UpdateUsers, DeleteUser}