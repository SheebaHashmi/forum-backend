const express = require('express')
const router = express.Router()

const {
        getAllPosts,
        addPost,
        getPostByPost_id,
        updatePost,
        removePost
} = require('./posts_model')
const {
        restricted,
        checkPostExists,
        checkPostBody
} = require('./posts_middleware')

router.get('/:username/posts', restricted, async (req, res, next) => {
        try {
                const { username } = req.params
                const response = await getAllPosts(username)
                res.json(response)
        }
        catch (err) {
                next(err)
        }
})

router.get('/:username/post/:post_id', restricted, async (req, res, next) => {
        try {
                const { post_id } = req.params
                const response = await getPostByPost_id(post_id)
                res.json(response)
        }
        catch (err) {
                next(err)
        }
})


router.post('/:username/post', restricted,checkPostBody, async (req, res, next) => {
        try {
                const { username } = req.params
                const response = await addPost(username, req.body)
                res.json(response)
        }
        catch (err) {
                next(err)
        }
})

router.delete('/:username/post/:id', restricted, checkPostExists, async (req, res, next) => {
        try {
                res.json(req.post)
                await removePost(req.params.id)
        }
        catch (err) {
                next(err)
        }
})

router.put('/:username/post/:id', restricted,checkPostExists, async (req, res, next) => {
        try {
                const { id } = req.params
                const response = await updatePost(id,req.body)
                res.json(response)

        }
        catch (err) {
                next(err)
        }
})

module.exports = router