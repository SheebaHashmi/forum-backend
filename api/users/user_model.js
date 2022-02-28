const db = require('../data/db-config')

function getAllUsers(){
    return db('users')
}
function getUserBy(filter){
    return db('users').where(filter).first()
}

async function insertNewUser(user){
  const [newUser] = await db('users').insert(user,['user_id','fullname','username','email','created_at'])
  return newUser
}
async function updateUser(user_id, changes){
    await db('users as u')
    .where('u.user_id', user_id)
    .update(changes)

    return getUserBy({user_id:user_id})
}

module.exports = {
    getAllUsers,
    getUserBy,
    insertNewUser,
    updateUser
}