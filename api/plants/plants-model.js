const db = require("../../data/configdb")

function removePlant(PlantId){
    return db("plants").where("id", PlantId).del()
}

function updatePlant(changes,PlantId){
    return db("plants").where("id", PlantId).update(changes)
}

function findByID(id) {
    return db("plants").where("id", id).first("id", "user_id as UserID", "nickname", "water", "H2OFrequency", "species", "image")
}

function findUserPlants(UserId){
    return db("plants as p").where("p.user_id", UserId)
            .join("users as u", "p.user_id", "u.id")
            .select("p.id", "p.user_id as UserID", "p.nickname", "p.water", "p.H2OFrequency", "p.species", "p.image")         
}

async function addPlant(plant, userID) {
    const [plantID] = await db("plants as p").insert(plant).where("p.user_id", userID)
            //  .join("users as u", "u.id", "p.user_id")
            //  .select("p.id", "p.user_id", "p.image", "p.nickname", "p.species", "p.H2OFrequency", "p.water")
     //return findByID(plantID) 
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