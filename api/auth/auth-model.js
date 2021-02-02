const db = require("../../data/configdb")

async function add(user) {
    const [id] = await db("users").insert(user, "id")
return findById(id)
}

function find() {
    return db("users").select("id","username", "password", "phoneNumber")
}

function findById(id) {
    return db("users").where("id", id).first("id", "username", "password")
}

function findByUsername(username) {
    return db("users").where("username", username).first("id", "username", "password")
}

module.exports = {
    find,
    findById,
    findByUsername,
    add,
}