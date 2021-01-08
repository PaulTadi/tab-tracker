const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentification.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        //vuex
        try{
        const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            //email already exists'
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
        res.send({
            message: `Hello ${req.body.email}!! your user was registered.`
        })

    },
    async login(req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            //console.log('user', user.toJSON())
            console.log(user.password)
            //const isPasswordValid = await user.comparePassword(password)
            const isPasswordValid = password === user.password
            //console.log('hashed')
            if (!user || !isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const userJson = user.toJSON()
            console.log
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            
            } catch (err) {
                //email already exists'
                res.status(500).send({
                    error: 'An error has occured trying to log in'
                })
            }
    },

    status(req, res){

        res.send({
            message: 'hello status'
        })
    }

}
