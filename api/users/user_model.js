const db = require('../data/db-config')

function getAllUsers(){
    return db('users')
}

async function insertNewUser(user){
  const [newUser] = await db('users').insert(user,['user_id','fullname','username','email','created_at'])
  return newUser
}

module.exports = {
    getAllUsers,
    insertNewUser
}