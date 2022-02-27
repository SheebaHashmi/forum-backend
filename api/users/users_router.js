const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const {
    getAllUsers,
    insertNewUser,
    } = require('./user_model')

router.get('/register',async (req,res)=>{
    const response = await getAllUsers()
    res.json(response)
})

router.post('/register', async (req,res,next) => {
   try{
        const {fullname,username,email,password} = req.body
        const hash = bcrypt.hashSync(password,8)
        const response = await insertNewUser({fullname,username,email,password:hash})
        res.json(response)
   }
   catch(err){
       next(err)
   }
})

module.exports = router