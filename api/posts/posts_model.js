const db = require('../data/db-config')
const User = require('../users/user_model')

async function getAllPosts(username){
    const response = await db('posts as p')
            .join('users as u','p.author_id','u.user_id')
            .select('p.*', 'u.username')
            .where('u.username',username)
    return response
}

async function getPostByPost_id(post_id){
    const response = await db('posts as p')
            .where('p.post_id',post_id)

    return response
}

async function addPost(username,body){
    const {user_id} = await User.getUserBy({username:username})

    body = {
        ...body,
        author_id:user_id
    }

    const response  = await db('posts as p')
                        .where('p.author_id',user_id)
                        .insert(body,['post_id','post_title','post_body','author_id'])

    return response
}

async function updatePost(post_id,changes){
    await db('posts as p')
        .where('p.post_id', post_id)
        .update(changes)

    return getPostByPost_id(post_id)
}

function removePost(post_id){
    return db('posts')
        .where('post_id',post_id)
        .del()
}


module.exports = {
    getAllPosts,
    getPostByPost_id,
    addPost,
    updatePost,
    removePost
}

