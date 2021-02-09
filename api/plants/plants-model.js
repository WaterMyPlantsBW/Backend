const db = require("../../data/configdb")


function findUserPlants(UserId){
    return db("plants as p").where("p.user_id", UserId)
            .join("users as u", "p.user_id", "u.id")
            .select("p.id", "p.user_id as UserID", "p.nickname", "p.water", "p.H2OFrequency", "p.species", "p.image")         
}
async function removePlant(PlantId){
    return db("plants").where("id",PlantId).del()
    // return findUserPlants(userID)
}

async function updatePlant(changes,PlantId){
    await db("plants").where("id",PlantId).update(changes)
    return findByID(PlantId)
}

function findByID(id) {
    return db("plants").where("id", id).first("id", "user_id as UserID", "nickname", "water", "H2OFrequency", "species", "image")
}



async function addPlant(plant, userID) {
    const [plantID] = await db("plants as p").insert(plant).where("p.user_id", userID)
             
     return findUserPlants(userID)
 }

function findPlantByNickname(name) {
     return db("plants").where("nickname", name).first("id", "nickname")
 }
module.exports = {
    removePlant,
    updatePlant,
    findByID,
    addPlant,
    findPlantByNickname,
    findUserPlants
}