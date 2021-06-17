// const Websocket = require('ws');

// const PORT = 3030;

// const server = new Websocket.Server({
//     port: PORT
// })

// server.on('connection',(socket) => {
//     console.log("someone connected")
//     socket.on('message', (data => {
//         console.log("message from client", data)
//         socket.send("got the message bud.")
//     }));
// })


const http = require("http").createServer();

const socket = require("socket.io");

const io = socket(http,{
    cors: {origin: '*'}
});

io.on('connection', (socket) => {
    console.log('client connected', socket.id)
    socket.on('message', data => {
        io.emit("message",socket.id.substr(0,2)+":"+data)
    })
})



const PORT = 3030;

http.listen(PORT, () => console.log('Listening on http://localhost:'+PORT));
