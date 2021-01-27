const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to WaterMyPlants API Lambda Team: no.132"
    })
})
module.exports = router