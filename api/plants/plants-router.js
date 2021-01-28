const express = require("express")
const router = express.Router()
const plants = require("./plants-model")
const {validatePlantID} = require("../middleware/api-middleware")

router.put("/:id",validatePlantID(), async(req, res, next) => {
    try{
res.status(200).json(req.plant)
    }catch(err){
        next(err)
    }
})
router.delete("/:id",validatePlantID(), async(req, res, next) => {
    try{
await plants.removePlant(req.params.id)
res.status(204).json({
    message: "plant was deleted"
})
    }catch(err){
        next(err)
    }
})
module.exports = router