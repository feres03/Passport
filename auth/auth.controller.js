const User = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


exports.Register = async (req, res) => {
    try {
        const found = await User.findOne({ email: req.body.email })
        console.log(found)
        if (found) {
            res.status(400).send({ message: 'Email already exist' })
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
            await User.create(req.body)
            console.log(req.body)
            res.send({ message: "Added successfully" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message || "Error" })
    }
}

exports.Login = async (req, res) => {
    try {
        const found = await User.findOne({ email: req.body.email })
        if (found) {
            const validpassword = bcrypt.compareSync(req.body.password, found.password)
            if (validpassword) {
                const data = {
                    idUser: found._id
                }
                const token = jwt.sign(data, 'tokenSecret', { expiresIn: '1d' })
                res.send({ message: 'You are logged in', token })
            }
            else {
                res.status(400).send({ message: "Verify your email or password!" })
            }
        }
        else {
            res.status(400).send({ message: "Verify your email or password!" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}