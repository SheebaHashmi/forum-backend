const Posts = require('./posts_model')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

const restricted = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token){
        next({status: 401, message: 'Unauthorized'})
    }
    jwt.verify(token, JWT_SECRET,(err,decodedToken) => {
        if(err){
            next({
                status: 401,
                message: 'Token required'
            })
        }
        else{
            req.decodedToken = decodedToken 
            next()
        }
    })
}

module.exports = {
    restricted
}