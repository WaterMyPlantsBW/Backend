const db = require("../../data/configdb")

function getUserByID(id) {
    return db("users").where("id",id).first() 
}

async function updateUser(changes, id) {
    await db("users").where("id", id).update(changes)
    return getUserByID(id)
}

function removeUser(id){
    return db("users").where("id", id).del()
}


function findUserPlants(UserId){
    return db("plants as p").where("u.id", UserId)
            .join("users as u", "u.id", "p.user_id")
            
            
}


module.exports = {
    updateUser,
    getUserByID,
    removeUser,
    findUserPlants,
    
}