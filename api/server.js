const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const restrict = require("./middleware/restrict-middleware")
const server = express()

const welcomeRouter = require("./welcome-router")
const authRouter = require("./auth/auth-router")
const userRouter = require("./user/user-router")
const plantRouter = require("./plants/plants-router")

server.use(helmet())
server.use(cors({
	origin: ['http://localhost:3000'],
    credentials: true
}))
server.use(express.json())


server.use("/",welcomeRouter)
server.use("/auth",authRouter)
server.use("/users",restrict, userRouter)
server.use("/plants", restrict, plantRouter)



server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
