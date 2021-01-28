const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const server = express()

const welcomeRouter = require("./welcome-router")
const authRouter = require("./auth/auth-router")
const userRouter = require("./user/user-router")

server.use(express.json())
server.use(helmet())
server.use(cors())



server.use("/",welcomeRouter)
server.use("/users", userRouter)
server.use("/auth",authRouter)



server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
