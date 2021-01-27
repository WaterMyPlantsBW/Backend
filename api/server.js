const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const server = express()

const welcomeRouter = require("./welcome-router")

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use("/",welcomeRouter)
server.use("/users",usersRouter)


server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
