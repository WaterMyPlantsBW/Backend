const express = require("express")
const router = express.Router()
const users = require("./user-model")
const {find} = require("../auth/auth-model")
const { checkUserID } = require("../middleware/api-middleware")
const bcrypt = require("bcryptjs")

router.get("/:id",checkUserID(), async(req, res, next) => {
try{
res.status(200).json(req.user)
}catch(err){
    next(err)
}
})
router.get("/", async(req, res, next) => {
    try{
const usersList = await find()
res.status(200).json(usersList)
    }catch(err){
        next(err)
    }
})
router.put("/:id", checkUserID(), async(req, res, next) => {
    try{
        const {password, phoneNumber} = req.body
        const userPassword = req.user.password
        
        
            const updatedInfo = {
                password:await bcrypt.hash(password, 15),
                phoneNumber
            }
        
        const updated = await users.updateUser(updatedInfo, req.params.id)
res.status(200).json({
    message: "success updated info"
})
    }catch(err){

    }
})
router.post("/:id/plants", checkUserID(), async (req, res, next) => {
    try{

    }catch(err){
        next(err)
    }
})

router.get("/:id/plants", checkUserID(), async(req, res, next) => {
    try{

    }catch(err){
        next(err)
    }
})

module.exports = router