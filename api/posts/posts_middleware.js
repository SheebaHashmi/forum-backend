const Posts = require('./posts_model')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        next({ status: 401, message: 'Unauthorized' })
    }
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            next({
                status: 401,
                message: 'Token required'
            })
        }
        else {
            req.decodedToken = decodedToken
            next()
        }
    })
}

const checkPostExists = async (req, res, next) => {
    const { id } = req.params
    const post = await Posts.getPostByPost_id(id)
    if (!post) {
        next({
            status: 404,
            message: "Post not found"
        })

    }
    else {
        req.post = post
        next()
    }
}

const checkPostBody = (req,res,next) => {
    const {post_body} = req.body
    if(!post_body){
        next({
            status:400,
            message:'Post body is required'
        })
    }
    else{
        next()
    }
} 

module.exports = {
    restricted,
    checkPostExists,
    checkPostBody
}