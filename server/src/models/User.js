//const Sequelize = require('sequelize')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 10
    console.log('hashpassword')
    if (!user.changed('password')){
        return;
    }
    console.log('hashpassword')
    return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
        user.setDateValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING

    }/*, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    }*/)

    User.prototype.comparePassword = (password) => {
        console.log(this.password)
        return bcrypt.compare(password, this.password)
    }

    return User
}
    