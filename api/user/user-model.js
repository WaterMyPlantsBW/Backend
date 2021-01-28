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

function addPlant(plant, UserID) {
    return db("plants as p").insert(plant).where("p.user_id", UserID)
            .join("users as u")
            .on("u.id", "p.user_id")
            .select("p.id", "p.user_id", "p.image", "p.nickname", "p.species", "p.H2OFrequency", "p.water")
}

function findUserPlants(UserId){
    return db("plants as p").where("u.id", UserId)
            .join("users as u" )
            .on("u.id", "p.user_id")
            
}

function removePlant(PlantId){
    return db("plants").del().where("id", PlantId)
}

function updatePlantInfo(changes,PlantId){
    return db("plants as p").where("id", PlantId).update(changes)
}
module.exports = {
    updateUser,
    getUserByID,
    removeUser,
    addPlant,
    findUserPlants,
    removePlant,
    updatePlantInfo
}