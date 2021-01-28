const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const users = require("../auth/auth-model")
const usersPlants = require("../user/user-model")
const plants = require("../plants/plants-model")

function validateRegistration() {
    return async (req, res, next) => {
try{
    const {username, password, phoneNumber} = req.body
    //check if user exsists
    const user = await users.findByUsername(username)
    if(user) {
        return res.status(409).json({
            message: "username already taken"
        })
    }else if(!password || !username || !phoneNumber){
return res.status(400).json({
    message: "username, password and phone number required"
})
    }else{
        next()
    }
}catch(err){
    next(err)
}
    }
}
function validateUser() {
    return async (req, res, next) => {
    try{
        const {username, password} = req.body
        const user = await users.findByUsername(username)
        const passwordValid = await bcrypt.compare(password, user.password)
        
if(!username || !password){
    return res.status(400).json({
        message: "username and password required"
    })
}
else if(!user || !passwordValid){
    return res.status(401).json({
        message: "invalid credentials"
    })
}else{
    next()
}
}catch(err){
            next(err)
        }
}
}


function signToken() {
    return async (req, res, next) => {
        try{
        const {username} = req.body
        const user = await users.findByUsername(username)

        const token = jwt.sign({
            //this is the payload objet of the token === the data that we want encrypted in the token
            userID: user.id,
            userPhoneNumber: user.phoneNumber,
            expiresAt: "24h"
        }, process.env.JWT_SECRET )
        
        req.token = token
        //console.log(req)
        next()
    }catch(err){
            next(err)
        }
    }
}

function checkUserID(){
    return async(req, res, next) => {
try{
const user = await usersPlants.getUserByID(req.params.id)
if(user){
    req.user = user
    next()
}else{
   return res.status(404).json({
        message: "user with the specified id does not exist!"
    })
}
}catch(err){
    next(err)
}
    }
}

function validatePlantID() {
    return async(req, res, next) => {
        try{
            const plant = await plants.findByID(req.params.id)
            if(plant){
                req.plant = plant
                next()
            }else{
                return res.status(404).json({
                    message: "plant does not exist"
                })
            }
        }catch(err) {
            next(err)
        }
        
    }
}
module.exports = {
    validateUser,
    signToken,
    validateRegistration,
    checkUserID,
    validatePlantID
}