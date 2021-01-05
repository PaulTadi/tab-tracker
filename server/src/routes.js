module.exports = (app) => {

    app.get('/status', (req, res) =>{

        res.send({
            message: 'hello status'
        })
    
    })

    app.post('/register', (req, res) =>{

        res.send({
            message: `Hello ${req.body.email}!! your user was registered.`
        })
    
    })

}
