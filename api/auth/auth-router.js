const router = require('express').Router();
const bcrypt = require("bcryptjs")
const users = require("./auth-model")
const {validateUser, signToken, validateRegistration} = require("../middleware/api-middleware")


router.post('/register', validateRegistration(), async (req, res, next) => {
 try{
  
const {username, password, phoneNumber} = req.body
const newUser = await users.add({
    username,
    //here hash the password before saving it to the db with a time complexity of 15
    password: await bcrypt.hash(password, 15),
    phoneNumber
})

res.status(201).json(newUser)

 }catch(err){
   next(err)
 }
})

router.post('/login',validateUser(),signToken(), async (req, res) => {
    try{
      const {username} =req.body
      
      res.status(200).json({
          message: `Welcome ${username}!`,
          token: req.token
      }).end()
    }catch(err) {
      next(err)
    }
})

module.exports = router