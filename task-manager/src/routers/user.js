const express = require('express')
const User = require('../models/user.js')
const router = new express.Router()
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({user,token})
    } catch (e) {
        res.status(400).send()
    }



})

router.post('/users/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()
        res.send({user , token})
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }




})


router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        return res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }



})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']
    const IsValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!IsValidOperation) {
        res.status(400).send({
            error: 'Invalid updates!'
        })
    }


    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        /*  const user = await User.findByIdAndUpdate(_id, req.body, {
              new: true,
              runValidators: true
          }) */
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)


    } catch (e) {
        res.status(400).send(e)
    }




})
router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findByIdAndDelete(_id)
        if (!user) {
            return res.status(404)
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router