console.log('test')
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())
/*
get
post
put
patch
delete
*/
app.post('/register', (req, res) =>{

    res.send({
        message: `Hello ${req.body.email}!! your user was registered.`
    })

})

app.get('/status', (req, res) =>{

    res.send({
        message: 'hello status'
    })

})


app.listen(process.env.PORT || 8081)
