const express = require('express')

const userRouter = require('./users/users_router')
const postsRouter = require('./posts/posts_router')
const profileRouter = require('./profile/profile_router')

const server = express()

server.use(express.json())
server.use('/api/auth',userRouter)
server.use('/api', postsRouter)
server.use('/api', profileRouter)

server.get('/',(req,res)=>{
  res.json('Welcome to forum-backend')
})

server.use((err,req,res,next) => { //eslint-disable-line
  res.status(err.status || 500)
    .json({
      message: err.message
    })
})

module.exports = server
