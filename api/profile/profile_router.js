const express = require('express')
const router = express.Router()

const User = require('../users/user_model')
const {
    checkUserProfileExists,
} = require('../users/user_middleware')


router.get('/:username/profile', checkUserProfileExists ,async(req,res,next) => {
    try{
        res.json(req.user)
    }
    catch(err){
        next(err)
    }
})

router.put('/:username/profile', checkUserProfileExists,async (req,res,next) => {
    try{
        const {user_id} = req.user
        const response = await User.updateUser(user_id,req.body)
        res.json(response)
    }
    catch(err){
        next(err)
    }
})

module.exports = router