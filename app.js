const path = require('path')
const http = require('http')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)
const socketIO = require('socket.io')

const io = socketIO(server)

app.use(express.static(path.join(__dirname, 'src')))

io.on('connection', socket => {
    socket.on('chat', data => {
        console.log(data)

        io.emit('chat', `그래 반가워 ${data}`)
    })
})

server.listen(PORT, () => console.log('server is running'))