//const Sequelize = require('sequelize')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))
/*
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
    return bcrypt.hash(user.password, SALT_FACTOR)
        .then((hash) => {
            user.setDataValue('password', hash);
        });
}*/
const hashPassword = (user, options) => {
    const SALT_FACTOR = 8
  
    if(!user.changed('password')) {
      return;
    }
  
    return bcrypt.hash(user.password, SALT_FACTOR).then((hash) => {
      user.setDataValue('password', hash);
    });
  }

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING

    }, {
        hooks: {
            beforeCreate: hashPassword
        }
    })

    /*
    this doesn't work
    User.prototype.comparePassword = (password) => {
        return bcrypt.compare(password, this.password)    
    }
    */
    User.prototype.comparePassword = function (password) {

        return bcrypt.compare(password, this.password)
        
    }

    return User
}
    