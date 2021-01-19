const {User} = require('../models')
const config = require('../config/config')
/*
const hashPassword = (user, options) => {
    const SALT_FACTOR = 8
  
    if(!user.changed('password')) {
      return;
    }
  
    return bcrypt.hash(user.password, SALT_FACTOR).then((hash) => {
      user.setDataValue('password', hash);
    });
  }*/

async function findUser(email) {
    try {
        console.log(email)
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(user.password)
        return user
    }catch (err) {
        //email already exists'
        res.status(500).send({
            error: 'An error has occured trying to log in'
        })
        return
    }
}