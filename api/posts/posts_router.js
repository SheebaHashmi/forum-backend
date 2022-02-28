const express = require('express')
const router = express.Router()

const {
        getAllPosts,
        addPost
} = require('./posts_model')
const {restricted} = require('./posts_middleware')

router.get('/:username/posts',restricted, async (req,res,next) => {
        try{
                const {username} = req.params
                const response = await getAllPosts(username)
                res.json(response)
        }
        catch(err){
                next(err)
        }
})

router.post('/:username/posts',restricted, async (req,res,next) => {
        try{
                const {username} = req.params
                const response = await addPost(username,req.body)
                res.json(response)
        }
        catch(err){
                next(err)
        }
})

module.exports = router