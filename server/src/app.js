console.log('test')
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require ('./config/config')

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

require('./routes')(app)

sequelize.sync({  })
    .then(() =>{

        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })




app.listen(process.env.PORT || 8081)
