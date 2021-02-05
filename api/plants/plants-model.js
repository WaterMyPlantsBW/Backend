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

async function addPlant(plant, UserID) {
    const [plantID] = await db("plants as p").insert(plant).where("p.user_id", UserID)
            //  .join("users as u", "u.id", "p.user_id")
            //  .select("p.id", "p.user_id", "p.image", "p.nickname", "p.species", "p.H2OFrequency", "p.water")
     return findByID(plantID) 
 }

 function findPlantByNickname(name) {
     return db("plants").where("nickname", name).first("id", "nickname")
 }
module.exports = {
    removePlant,
    updatePlant,
    findByID,
    addPlant,
    findPlantByNickname
}