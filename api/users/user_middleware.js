const User = require('./user_model')

const checkRequestBody = (req,res,next) => {
    const {fullname,username,email,password} = req.body
    if(!fullname || !username || !email || !password){
        next({status:400, message: "Missing required field input"})
    }
    else{
        next()
    }
}

const checkUserExists = async (req,res,next) => {
    try{

        const userExists = await User.getUserBy({username:req.body.username})
        if(!userExists){
            next({status:404,message:"User not found"})
        }else{
            req.user = userExists
            next()
        }
    }
    catch(err){
        next(err)
    }
}

const checkUserProfileExists = async (req,res,next) => {
    try{
        const {username} = req.params
        const userExists = await User.getUserBy({username:username})
        if(!userExists){
            next({status:404,message:"User not found"})
        }else{
            req.user = userExists
            next()
        }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    checkUserExists,
    checkRequestBody,
    checkUserProfileExists
}