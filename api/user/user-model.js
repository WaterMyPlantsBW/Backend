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

function addPlant(plant) {
    return 
}

function findUserPlants(id){
    return
}

function removePlant(id){
    return
}

function updatePlantInfo(changes, id){
    return
}
module.exports = {
    updateUser,
    getUserByID,
    removeUser
}