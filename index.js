require("dotenv").config()
const ws= require("ws")
const server = new ws.Server({port: process.env.PORT})

server.on("connection", socket => {
    socket.on("message", message => {
        console.log(message)
        socket.send(`${message}`)
    })
})
