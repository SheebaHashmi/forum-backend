const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || "hodor"

function makeToken(user){
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn: '5h'
    }
    const token = jwt.sign(payload,JWT_SECRET,options)
    return token
}

module.exports = {
    makeToken,
    JWT_SECRET
}