const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/status', AuthenticationController.status)

    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}

