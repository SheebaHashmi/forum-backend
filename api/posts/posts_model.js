const db = require('../data/db-config')

function getAllPosts(){
    return db('posts').where('author_id',1)
}
module.exports = {
    getAllPosts
}

