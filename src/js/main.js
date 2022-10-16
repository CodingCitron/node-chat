const socket = io()

socket.emit('chat', 'from front') // 채널 이름을 적는다.

socket.on('chat', data => {
    console.log(data)
}) // 받는 메소드

console.log(socket) 