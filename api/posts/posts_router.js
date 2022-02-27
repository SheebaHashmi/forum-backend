const express = require('express')
const router = express.Router()

const {getAllPosts} = require('./posts_model')

router.get('/posts',async (req,res) => {
        const response = await getAllPosts()
        res.json(response)
})

module.exports = router