const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const { makeToken } = require('../secrets')
const {
    getAllUsers,
    insertNewUser,
    } = require('./user_model')
const {
    checkUserExists,
    checkRequestBody
    } = require('./user_middleware')


router.get('/register',async (req,res)=>{
    const response = await getAllUsers()
    res.json(response)
})

router.post('/register',checkRequestBody, async (req,res,next) => {
   try{
        const {fullname,username,email,password} = req.body
        const hash = bcrypt.hashSync(password,8)
        const response = await insertNewUser({fullname,username,email,password:hash})
        res.status(201).json(response)
   }
   catch(err){
       next(err)
   }
})

router.post('/login', checkUserExists, async(req,res,next) => {
    try{
        const {username,password} = req.body
        if(bcrypt.compareSync(password,req.user.password)){
            const token = makeToken(req.user)
            res.status(200).json({message: `Welcome ${username}`,token})
        }
    }
    catch(err){
        next(err)
    }
})

module.exports = router