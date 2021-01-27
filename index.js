const express = require("express")
const server = require("./api/server")
const port = process.env.PORT || 4000

server.listen(() => {
    console.log(`api running at http://localhost:${port}`)
})